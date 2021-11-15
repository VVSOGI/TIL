function solution(word) {
  let answer = 0;
  const dir = ["A", "E", "I", "O", "U"];
  const count = [781, 156, 31, 6, 1];
  word = [...word];

  for (let i in word) {
    let inx = dir.indexOf(word[i]);
    answer += inx * count[i] + 1;
  }
  return answer;
}
console.log(solution("AAAE"));
