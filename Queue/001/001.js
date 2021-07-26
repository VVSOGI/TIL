const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // 빌리지 배열의 '1'을 사람사는 집이고 '0'은 빈 집이라고 생각을 해보자.
  // 하루에 한번 소문이 시작된 지점에서 상하좌우에 '1'이 있다면 소문은 그 집으로 퍼진다.
  // 소문난 지점에 상하좌우에 '1'이 모두 있다면 4군데에 소문이 퍼지게 된다.
  // 모든 지점에 소문이 퍼질 때까지 위의 과정을 반복한 후 며칠이 지났는 지 확인한다.
  const R = village.length;
  const C = village[0].length;
  const matrix = createMatrix(village);
  const MOVES = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const MAX_SIZE = R * C;
  const queue = new Array(MAX_SIZE);
  let front = 0;
  let rear = 0;
  let count = 0;

  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
  // row, col이 배열의 범위 밖으로 벗어났다면 볼 이유가 없다.

  const isEmpty = (queue) => front === rear;

  const enQueue = (queue, pos) => {
    queue[rear] = pos;
    rear = rear + 1;
  };

  const deQueue = (queue) => {
    const pos = queue[front];
    front = front + 1;
    return pos;
  };

  enQueue(queue, [row, col]);
  matrix[row][col] = 0;

  while (isEmpty(queue) === false) {
    const [row, col] = deQueue(queue);
    count = matrix[row][col];

    MOVES.forEach((item) => {
      const [rDiff, cDiff] = item;
      const nextRow = row + rDiff;
      const nextCol = col + cDiff;
      if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === "1") {
        enQueue(queue, [nextRow, nextCol]);
        matrix[nextRow][nextCol] = matrix[row][col] + 1;
      }
    });
  }
  return count;
  // 자료구조 Queue는 선입선출의 구조로 되어있다. queue의 모든 부분들을 검사할 때까지
  // while문을 이용해서 반복해야한다. 이 문제를 풀면서 queue에 이해도가 많이 상승했다.
};
