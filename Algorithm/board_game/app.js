// 최초로 시도했을 때 테스트 통과한 코드.
function boardGame(board, operation) {
  let queue = operation.split("");
  let count = 0;
  let xPoint = 0;
  let yPoint = 0;

  // operation에 들어오는 str을 배열로 변환하여 queue에 넣음.
  // 시작 지점은 [0,0]이므로 각각 xPoint와 yPoint로 설정.
  // 보드에 1인 지점에 움직일 때마다 카운트를 늘려주기 위해서 카운트 변수 선언.

  while (queue.length > 0) {
    let str = queue.shift();

    // queue에서 가장 앞에있는 str을 가져온다.
    if (str === "U") {
      xPoint--;
    }

    if (str === "D") {
      xPoint++;
    }

    if (str === "L") {
      yPoint--;
    }

    if (str === "R") {
      yPoint++;
    }

    // str은 "U","D","L","R" 총 네 가지 경우가 있으므로 경우에 따라 나눠줌.

    if (xPoint < 0) {
      return "OUT";
    } else if (xPoint > board.length) {
      return "OUT";
    } else if (yPoint < 0) {
      return "OUT";
    } else if (yPoint > board.length) {
      return "OUT";
    }

    // xPoint가 보드 밖으로 나가는 지점에서는 return "OUT" 해준다.

    if (board[xPoint][yPoint] === 1) {
      count++;
    }

    // 보드에 1인 지점에 xPoint, yPoint가 있다면 카운트를 올려준다.
  }
  return count;
  // 카운트를 리턴한다.
}

function boardGame(board, operation) {
  // 레퍼런스 코드.
  const DIR = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };
  const LEN = operation.length;
  const isValid = (y, x) => {
    return 0 <= y && y < LEN && 0 <= x && x < LEN;
  };

  let Y = 0;
  let X = 0;
  let score = 0;
  for (let i = 0; i < LEN; i++) {
    const [dY, dX] = DIR[operation[i]];
    Y += dY;
    X += dX;
    if (isValid(Y, X) === false) return "OUT";
    score += board[Y][X];
  }
  return score;
}
