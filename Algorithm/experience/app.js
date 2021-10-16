function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let result = flattenArr(arr[i]);
      newArr.push(...result);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output);
