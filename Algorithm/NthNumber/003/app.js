function solution(n, a, b) {
  // a와 b가 어디에 위치해있는지가 중요한듯.
  let answer = 1;
  while (n) {
    const highNumCompare = Math.max(a, b);
    if (Math.abs(a - b) === 1 && highNumCompare % 2 === 0) return answer;

    if (a % 2) {
      a = (a + 1) / 2;
    } else {
      a = a / 2;
    }

    if (b % 2) {
      b = (b + 1) / 2;
    } else {
      b = b / 2;
    }

    n = n / 2;
    answer++;
  }
}
