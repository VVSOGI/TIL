function solution(relation) {
  // 후보 키를 찾는다.
  // 각 배열에 요소에는 컬럼의 속성들이 있다.
  // 배열의 모든 요소는 길이가 같다.
  // 0번째에서 n번째까지 동일한 값이 있는지 확인해보기.
  let obj = {};

  for (let i = 0; i < relation.length; i++) {
    for (let j = 0; j < relation[0].length; j++) {
      if (!Array.isArray(obj[j])) {
        obj[j] = [];
      }
      if (obj[j].indexOf(relation[i][j]) < 0) {
        obj[j].push(relation[i][j]);
      }
    }
  }
  console.log(obj);
}

solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]);
