function solution(numbers) {
  // 가장 앞에 숫자가 중요하다. 10 2 30이면 1 2 3 이럴경우 30210 이런 식으로 구성이 되야한다.
  //  1. 가장 앞의 숫자가 큰 숫자
  //  2. 가장 앞의 숫자가 같고 길이가 1 이상이라면 두 번째로 오는 숫자가 커야한다.
  let arr = numbers.map((item) => String(item));
  let sorted = arr.sort((a, b) => b + a - (a + b)).join("");
  return sorted[0] === "0" ? "0" : sorted;
}

solution([6, 10, 2]);
