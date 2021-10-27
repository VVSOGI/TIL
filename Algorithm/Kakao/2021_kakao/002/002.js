function solution(orders, course) {
  // 코드 진행이 정렬을 하고 하는 것이 편할 것 같으니 정렬.

  let sortOrder = orders.map((item) => {
    return item.split("").sort().join("");
  });

  // 가장 많이 먹은 사람의 메뉴중에서 두 개로 나올 수 있는 경우를 찾는 방법?
  // 아닌것 같다.

  // 적게 먹은 사람을 기준으로 찾아보기.
  // 해봤는데 틀렸다.

  // 조합을 이용해서 들어간 코스의 갯수에 맞는 경우의 수를 구한다음 주어진 경우의 수를
  // orders에 하나씩 대입해봐서 가장 많이 먹은 것을 뽑아내보겠다.

  function combination(arr, selectNumber) {
    let result = [];

    if (selectNumber === 1) {
      return arr.map((item) => [item]);
    }

    arr.forEach((item, index, array) => {
      const fixed = array.slice(index + 1);
      const combinationArr = combination(fixed, selectNumber - 1);
      const combineFixed = combinationArr.map((combination) => [
        item,
        ...combination,
      ]);
      result.push(...combineFixed);
    });

    return result;
  }

  function countNumber(checkArr, totalArr) {
    let totalSlice = totalArr.slice();
    let count = 0;

    while (totalSlice.length) {
      let mostLeft = totalSlice.shift().split("");
      let arr = [];

      for (let i = 0; i < checkArr.length; i++) {
        for (let j = 0; j < mostLeft.length; j++) {
          if (checkArr[i] === mostLeft[j]) {
            arr.push(checkArr[i]);
            break;
          }
        }
      }

      if (arr.length === checkArr.length) {
        count++;
      }
    }
    return count;
  }

  let rowOrder = sortOrder.sort((a, b) => a.length - b.length);
  let resultObj = {};
  let isChecked = [];
  let sliceCourse = course.slice();

  while (sliceCourse.length) {
    let mostLeft = sliceCourse.shift();
    for (let i = 0; i < orders.length; i++) {
      let comArr = orders[i].split("");
      let result = combination(comArr, mostLeft);

      // 조합으로 각각 경우의 수를 구했음.
      // 이제 중복되지 않게끔 resultObj에 갯수를 넣어준다.

      for (let i = 0; i < result.length; i++) {
        let sorted = result[i].sort().join("");
        if (isChecked.filter((item) => item === sorted).length < 1) {
          isChecked.push(sorted);
          let checkCount = countNumber(result[i], orders);

          // checkCount가 1이면 자기 자신만을 찾은것이기에 제외.

          if (!resultObj[sorted] && checkCount > 1) {
            resultObj[sorted] = checkCount;
          } else if (resultObj[sorted]) {
            resultObj[sorted]++;
          }
        }
      }
    }
  }

  // resultObj에 가장 높은 length만 구하기.

  let scoreArr = Object.entries(resultObj).sort();
  let highScore = course.map((item) => {
    let arr = [];
    for (let i = 0; i < scoreArr.length; i++) {
      if (scoreArr[i][0].length === item) {
        arr.push(scoreArr[i][1]);
      }
    }
    return Math.max(...arr);
  });

  let highArr = [];
  scoreArr = scoreArr.sort((a, b) => a[0].length - b[0].length);
  let pickScore = highScore.shift();
  let totalLength = scoreArr[0][0].length;
  while (scoreArr.length) {
    let mostLeft = scoreArr.shift();
    if (totalLength !== mostLeft[0].length) {
      pickScore = highScore.shift();
      totalLength = mostLeft[0].length;
    }

    if (mostLeft[1] === pickScore) {
      highArr.push(mostLeft[0]);
    }
  }

  return highArr.sort();
}

function solution(orders, course) {
  const ordered = {};
  const candidates = {};
  const maxNum = Array(10 + 1).fill(0);
  const createSet = (arr, start, len, foods) => {
    if (len === 0) {
      ordered[foods] = (ordered[foods] || 0) + 1;
      if (ordered[foods] > 1) candidates[foods] = ordered[foods];
      maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      createSet(arr, i + 1, len - 1, foods + arr[i]);
    }
  };

  orders.forEach((od) => {
    // arr.sort는 기본적으로 사전식 배열
    const sorted = od.split("").sort();
    // 주문한 음식을 사전순으로 배열해서 문자열을 만든다.
    // course에 있는 길이만 만들면 된다.
    course.forEach((len) => {
      createSet(sorted, 0, len, "");
    });
  });

  const launched = Object.keys(candidates).filter(
    (food) => maxNum[food.length] === candidates[food]
  );

  return launched.sort();
}

console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
