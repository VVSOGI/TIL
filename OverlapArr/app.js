function solution(arr) {
  const newArr = [arr[0]];
  let exNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (exNum !== arr[i]) {
      newArr.push(arr[i]);
      exNum = arr[i];
    } else {
      continue;
    }
  }
  return newArr;
}

console.log(
  solution([
    0, 1, 1, 2, 2, 7, 3, 4, 4, 9, 4, 4, 4, 5, 8, 5, 5, 5, 5, 6, 6, 6, 1, 1, 1,
    7, 7, 7, 8, 8, 8,
  ])
);
