function checkRank(l) {
  let rankObj = { 1: 6, 2: 5, 3: 4, 4: 3, 5: 2 };
  for (let key in rankObj) {
    if (rankObj[key] === l) {
      return Number(key);
    }
  }
  return 6;
}
// 로또의 정답 개수에 따라서 순위를 정해주는 함수.

function solution(lottos, win_nums) {
  let checkNum = [];
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      checkNum.push(0);
    }
    for (let j = 0; j < lottos.length; j++) {
      if (lottos[i] === win_nums[j]) {
        checkNum.push(lottos[i]);
        break;
      }
    }
  }
  let highCost = checkNum.length;
  let rowCost = checkNum.filter((item) => item !== 0).length;

  let highOrder = checkRank(highCost);
  let rowOrder = checkRank(rowCost);

  return [highOrder, rowOrder];
}
