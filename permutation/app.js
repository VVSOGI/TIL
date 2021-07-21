function rps(n) {
  let result = [];
  let arr = [1, 2, 3];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result.push([arr[i], arr[j], arr[k]]);
      }
    }
  }

  return result;
}

let itemArr = [1, 2, 3];
let result = [];

const recursion = (count = 3, arr = []) => {
  if (count === 0) {
    return result.push(arr);
  }

  for (let i = 0; i < itemArr.length; i++) {
    const pick = itemArr[i];
    recursion(count - 1, arr.concat(pick));
  }

  return result;
};
recursion();
