function solution(board, moves) {
  // board의 그래프의 가장 위에 0이 아닌 다른 숫자가 있는지 확인한다.
  // 0이 아니라면 새로운 배열에 넣어주고 보드의 원래 위치의 숫자는 0으로 바꿔준다.
  // 새로운 배열에 연속된 숫자가 들어오면 둘 다 삭제하고 카운트를 하나 올린다.
  // 마지막에 카운트를 리턴한다.
  let count = 0;
  let moveArr = [];
  let queue = [moves.shift()];

  let newBoard = board.slice(); // 원본 배열을 유지하기 위한 복사.

  while (queue.length) {
    let now = queue.pop() - 1;
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i][now] !== 0) {
        moveArr.push(newBoard[i][now]);
        newBoard[i][now] = 0;
        break;
      }
    }

    let lastItem = moveArr.length - 1;
    if (moveArr[lastItem] === moveArr[lastItem - 1] && moveArr.length > 0) {
      moveArr.splice(lastItem - 1, 2);
      count = count + 2;
    }
    if (moves.length) {
      queue.push(moves.shift());
    }
  }
  return count;
}
