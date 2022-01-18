function solution(arr) {
  console.log(
    arr.reduce((a, c) => {
      if (a % c === 0) return c;
    })
  );
}

console.log(solution([2, 6, 8, 14]));
