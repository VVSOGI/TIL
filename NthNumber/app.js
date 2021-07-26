function solution(array, commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    const A = commands[i][0] - 1;
    const B = commands[i][1];
    const C = commands[i][2] - 1;

    const newArr = array.slice(A, B);
    newArr.sort((a, b) => a - b);
    result.push(newArr[C]);
  }

  return result;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
