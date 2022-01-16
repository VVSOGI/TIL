function solution(relation) {
  // 후보 키를 찾는다.
  // 각 배열에 요소에는 컬럼의 속성들이 있다.
  // 배열의 모든 요소는 길이가 같다.
  // 0번째에서 n번째까지 동일한 값이 있는지 확인해보기.
  let result,
    combinationArr = [],
    keyArr = [],
    attribute = relation[0].length,
    auxArr = new Array(attribute).fill(0).map((item, index) => {
      return (item = index);
    });

  for (let i = 0; i <= attribute; i++) {
    let check = combination(auxArr, i);
    combinationArr.push(...check);
  }

  for (let i = 0; i < combinationArr.length; i++) {
    addKey(keyArr, combinationArr[i], relation);
  }
}

function combination(arr, N) {
  const results = [];
  if (N === 1) return arr.map((item) => [item]);

  arr.forEach((item, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = combination(rest, N - 1);
    const attached = combinations.map((comb) => [item, ...comb]);
    results.push(...attached);
  });

  return results;
}

function addKey(keyArr, key, relation) {
  let isMin = true;
  for (let i = 0; i < keyArr.length; i++) {
    let prevKey = keyArr[i];
    for (let j = 0; j < key.length; j++) {
      prevKey = prevKey.filter((ele) => ele !== key[j]);
    }
    if (prevKey.length === 0) {
      isMin = false;
    }
  }

  if (keyArr.length !== 0 && !isMin) {
    return;
  }

  let arr = [];
  let isUnique = true;

  for (let i = 0; i < relation.length; i++) {
    let findElement = arr.find((element) => {
      let check = true;
      for (let j = 0; j < key.length; j++) {
        if (element[key[j]] !== relation[i][key[j]]) check = false;
      }
      return check;
    });
    if (findElement !== undefined) {
      isUnique = false;
    } else {
      arr.push(relation[i]);
    }
  }

  if (isUnique) {
    keyArr.push(key);
  }
}
