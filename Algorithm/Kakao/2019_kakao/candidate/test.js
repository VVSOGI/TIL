function BracketCombinations(num) {
  let answer = 0;

  function DFS(left, right) {
    if (left === 0 && right === 0) {
      answer++;
    }

    if (left > 0) {
      DFS(left - 1, right + 1);
    }

    if (right > 0) {
      DFS(left, right - 1);
    }
  }
  DFS(num, 0, "");

  return answer;
}

// keep this function call here
console.log(BracketCombinations(3));
