// 다이나믹 프로그래밍(Dynamic Programming)으로 푸는 문제
function solution(board) {
  let x_len = board[0].length,
    y_len = board.length,
    answer = 0;

  if (x_len < 2 || y_len < 2) return 1;

  // 1부터 쭉 탐색하면서 자신의 왼쪽 왼쪽상단, 상단 3개의 값을 비교하며 값을 채워넣는다.
  for (let i = 1; i < y_len; i++) {
    for (let j = 1; j < x_len; j++) {
      if (board[i][j] > 0) {
        let min = Math.min(
          board[i - 1][j - 1],
          board[i][j - 1],
          board[i - 1][j]
        );
        board[i][j] = min + 1;
      }
      if (answer < board[i][j]) {
        answer = board[i][j];
      }
    }
  }

  return answer * answer;
}
console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
);
