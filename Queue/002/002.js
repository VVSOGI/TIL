const robotPath2 = function (room, src, sDir, dst, dDir) {
  // 가로와 세로의 길이
  const R = room.length;
  const C = room[0].length;
  // 4가지 방향: 위(1), 오른쪽(2), 아래(3), 왼쪽(4)
  // 차례대로 [방향, 상하이동, 좌우이동]
  const MOVES = [
    [1, -1, 0], // UP
    [2, 0, 1], // RIGHT
    [3, 1, 0], // DOWN
    [4, 0, -1], // LEFT
  ];

  // 좌표가 유효한 좌표인지 확인하는 함수
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;

  // 각 위치별 최소의 동작으로 도달 가능한 경우의 방향을 저장
  const directions = [];
  // 각 위치별 최소 동작의 수를 저장. 편의상 거리(dist)로 표현
  const dist = [];
  for (let row = 0; row < R; row++) {
    directions.push(Array(C).fill(0));
    dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
  }

  // bfs 구현을 위해 큐를 선언한다.
  const queue = Array(R * C);
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    queue[rear] = pos;
    rear++;
  };
  const deQueue = (queue) => {
    return queue[front++];
  };

  // 출발 지점의 좌표
  const [sRow, sCol] = src;
  directions[sRow][sCol] = sDir;
  dist[sRow][sCol] = 0;

  // 목표 지점의 좌표
  const [dRow, dCol] = dst;

  enQueue(queue, [sRow, sCol]);
  while (isEmpty(queue) === false) {
    const [row, col] = deQueue(queue);
    const dir = directions[row][col];

    for (move of MOVES) {
      const [nDir, rDiff, cDiff] = move;
      // 구조 분해 할당.
      // 이동할 좌표
      const nRow = row + rDiff;
      const nCol = col + cDiff;

      // 유효한 좌표가 아니거나
      // 해당 좌표가 장애물(1)인 경우 건너뛴다.
      if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;

      // 현재 위치의 방향과 목표 위치의 방향과의 차이
      // 이동은 방향과 움직임이 필요한데, 방향을 결정하는 부분이다.
      // 한번에 90도씩 움직일 수가 있다. 길이 하나밖에 없는 구간을 가고있다고 생각해보자.
      // 위 아래로 가는 길은 장애물로 막혀있고, 왼쪽 혹은 오른쪽으로만 움직일 수 있다.
      // 장애물에 걸리는 부분은 위에 유효성 검사에 통과하지 못할테니 움직일 수 있는 두 구간만 생각하면 된다.
      // 지나온 길을 다시 돌아가는 일은 없어야 한다. 그걸 위해서 우리는 dist의 배열에서 지나온 길을 돌아갈 수 없도록
      // 밑에 부분에 candidate로 설정을 해놨다. 이제 중요한 것은 dDiff 변수는 무엇을 의미하는 것 일까 이다.
      // dDiff가 0이라면, 원래 가던 방향으로 가고있다는 의미이다.
      // dDiff가 2이라면, 원래 가던 방향에서 반대로 가고있다는 의미이다. 즉 거꾸로 돌아간다는 뜻이다.
      // dDiff가 1 or 3이라면, 원래 가던 방향에서 90도 회전해서 다른 길로 간다는 뜻이다.
      // 그래서 조건을 세 가지로 나눠서 본 것이다.

      const dDiff = Math.abs(nDir - dir);
      let candidate;
      if (dDiff === 0) {
        // 차이가 없는 경우
        // 출발 지점에서의 방향과 이동하려는 방향이 같은 경우
        // 직진만 하면 되지만 그러기 위해서는 1로 초기화 되어야 한다.
        candidate = dist[row][col] || 1;
      } else if (dDiff === 2) {
        // 2번 회전해야 하는 경우: 회전 2 + 직진 1
        candidate = dist[row][col] + 3;
      } else {
        // 1번만 회전해도 되는 경우: 회전 1 + 직진 1
        candidate = dist[row][col] + 2;
      }

      if (nRow === dRow && nCol === dCol) {
        // 다음에 도달하는 곳이 목표 지점인 경우
        // 목표 방향까지 고려해서 필요한 거리를 계산한다.
        const dDiff = Math.abs(nDir - dDir);
        if (dDiff === 0) {
          candidate = candidate;
        } else if (dDiff === 2) {
          candidate = candidate + 2;
        } else {
          candidate = candidate + 1;
        }
      }

      if (candidate < dist[nRow][nCol]) {
        // 유망한 좌표는 큐에 삽입한다.
        enQueue(queue, [nRow, nCol]);
        dist[nRow][nCol] = candidate;
        // 방향은 전부 같다.
        directions[nRow][nCol] = nDir;
      }
    }
  }

  return dist[dRow][dCol];
};
let room = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 1],
];
let src = [3, 0];
let sDir = 3;
let dst = [2, 2];
let dDir = 2;
let output = robotPath2(room, src, sDir, dst, dDir);
console.log(output); // --> 11

// 자료구조 queue를 이용해서 한 단계 단계마다 갈 수있는 모든 방향을 체크할 수 있는 bfs를 구현했다.
// 유효성 검사 함수 isValid로 장애물이 닿거나, 배열의 밖으로 나가는 경우는 모두 제거했다.
// 여러가지 상황들을 미리 구현해놨다. move 배열에 한 단계 움직일 수 있는 모든 경우의 수를 담아놓고 사용했다.
// directions 그 위치에서 행동했던 방향들을 저장하도록 해놨고, 움직일때의 방향과 비교해서 행동의 숫자를 정했다.
// dist는 담을 수 있는 가장 큰 수를 담아놓은 이차원 배열이다. 움직일 때 지나갔던 곳인지를 비교할 수 있는 알고리즘이다.
// Queue의 특징인 선입선출을 이용해서 Queue안의 모든 요소들을 다 돌았을 때 while 구문이 끝나도록 설정했다.
