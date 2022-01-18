let maxScore = 0;
let answer = [-1];
function solution(n, info) {
  let ryan = new Array(11).fill(0);

  solve(0, n, ryan, info);
  return answer;
}

function solve(index, arrow, ryan, apeach) {
  if (index === 11 || arrow === 0) {
    ryan[10] += arrow;
    calcScore(ryan, apeach);
    ryan[10] -= arrow;
    return;
  }

  if (apeach[index] < arrow) {
    ryan[index] += apeach[index] + 1;
    solve(index + 1, arrow - apeach[index] - 1, ryan, apeach);
    ryan[index] -= apeach[index] + 1;
  }

  solve(index + 1, arrow, ryan, apeach);
}

function calcScore(ryan, apeach) {
  let ryanScore = 0,
    apeachScore = 0;
  for (let i = 0; i < 11; i++) {
    if (ryan[i] > apeach[i]) ryanScore += 10 - i;
    else if (apeach[i] > 0) apeachScore += 10 - i;
  }

  let result = ryanScore - apeachScore;
  if (result > 0 && result >= maxScore) {
    if (maxScore === result && !comparison(ryan)) return;

    maxScore = result;
    answer = ryan.slice();
  }
}

function comparison(ryan) {
  for (let i = 10; i >= 0; i--) {
    if (ryan[i] > answer[i]) return true;
    else if (ryan[i] < answer[i]) return false;
  }
}
