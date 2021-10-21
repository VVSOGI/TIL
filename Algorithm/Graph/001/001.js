function getDirections(matrix, from, to) {
  let isVisited = new Array(matrix.length).fill(false);
  // 매트릭스의 정점을 지나갔는지 확인하기 위한 배열.
  isVisited[from] = true;
  // 첫 번째로 주어진 from의 정점은 지나가기 때문에 true로 설정.
  let queue = [from];
  // Queue

  while (queue.length > 0) {
    let now = queue.shift();
    if (now === to) {
      return true;
    }
    // queue 배열이 아무것도 없을 때 까지 진행하거나 now와 to가 같아지는 지점까지 진행한다.
    let column = matrix[now];
    for (let i = 0; i < column.length; i++) {
      if (column[i] === 1 && isVisited[i] === false) {
        isVisited[i] = true;
        queue.push(i);
      }
      // 주어진 정점의 배열에 간선이 있는지 체크하고 간선이 있다면 이동하기 위해 방문 배열의
      // 간선의 위치를 true로 바꿔주고 그 정점으로 이동하기 위해 queue에 push해준다.
    }
  }
  return false;
  // 찾지 못한다면 false 리턴.
}

const result = getDirections(
  [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
  ],
  0,
  3
);
console.log(result);
