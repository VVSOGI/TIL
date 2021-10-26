function solution(s) {
  // 주어진 매개 변수를 s / 2보다 작거나 같게 잘랐을 때, 가장 짧은 문자열을 구해야한다.
  // 보조함수와 반복문을 이용해서 1개일때부터 s / 2개까지 몇개인지 구하고 result에 담는다.
  let result = [];

  function countLength(count, s) {
    let lastStr = s.slice(0, count);
    let repeat = 1;
    let str = "";
    for (let i = count; i <= s.length * 2; i = i + count) {
      if (lastStr === s.slice(i, i + count)) {
        repeat++;
        lastStr = s.slice(i, i + count);
      } else if (lastStr !== s.slice(i, i + count)) {
        if (repeat > 1) {
          str = str + repeat + lastStr;
          repeat = 1;
        } else {
          str = str + lastStr;
        }
        lastStr = s.slice(i, i + count);
      }
    }
    return str;
  }

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let resultLength = countLength(i, s);
    result.push(resultLength);
  }

  return result.map((item) => item.length).sort((a, b) => a - b)[0];
}
console.log(solution("abcabcabcabcdededededede"));
