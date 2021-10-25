function solution(N, stages) {
  // 주어진 스테이지 배열에서 하나씩 요소를 빼서 스테이지 배열에 같은 숫자가 몇 개가 있는지
  // 확인한다. 확인한 결과에서 전체의 배열의 길이와 결괏값의 길이를 나눠 실패율을 구한 후
  // 새로운 객체에 담아준다. 크기가 큰 순으로 정렬한다.

  stages = stages.sort((a, b) => a - b);

  let obj = {};
  let result = [];

  for (let i = 1; i <= N; i++) {
    obj[i] = 0;
  }

  for (let i = 0; i < stages.length; i++) {
    if (obj[stages[i]] === 0) {
      let filterArr = stages.filter((item) => item === stages[i]);
      obj[stages[i]] = filterArr.length / stages.length;
      stages = stages.filter((item) => item !== stages[i]);
      i = -1;
    }
  }

  let objToArr = Object.entries(obj);
  objToArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < objToArr.length; i++) {
    result.push(objToArr[i][0]);
  }

  return result;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
