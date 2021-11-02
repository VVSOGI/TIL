function solution(left, right) {
  let plus = [];
  let minus = [];

  for (let i = left; i <= right; i++) {
    let measure = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        measure++;
      }
    }
    if (measure % 2 === 0) {
      plus.push(i);
    } else {
      minus.push(i);
    }
  }

  let resultPlus = plus.reduce((a, c) => {
    return a + c;
  }, 0);
  let resultMinus = minus.reduce((a, c) => {
    return a + c;
  }, 0);

  return resultPlus - resultMinus;
}
