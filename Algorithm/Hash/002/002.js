function solution(clothes) {
  let clothObj = {};

  for (let i = 0; i < clothes.length; i++) {
    if (clothObj[clothes[i][1]] === undefined) {
      clothObj[clothes[i][1]] = [clothes[i][0]];
    } else {
      clothObj[clothes[i][1]].push(clothes[i][0]);
    }
  }
  // 옷의 종류별로 변수 Obj에 담아둔다.

  let objToArr = Object.values(clothObj);
  let result = 1;

  // 옷을 입었을 경우와 입지 않았을 경우까지 포함해서 변수 result에 담는다.
  // ex) 모자 = yellowhat을 입을 경우 1 + green_turban을 입을 경우 1 + 모두 입지 않을 경우 1
  //     안경 = bluesunglasses를 입을 경우 1 + 모두 입지 않을 경우 1
  // 모자 * 안경 = 3 * 2 ... 모자와 안경 둘다 쓰지 않을 경우가 포함됨.
  for (let i = 0; i < objToArr.length; i++) {
    result = result * (objToArr[i].length + 1);
  }

  // 한 가지의 옷도 입지 않을 경우를 빼기 위해서 - 1;
  return result - 1;
}

solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
