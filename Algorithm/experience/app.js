const checkLine = (arr, index, obj) => {
  let new_arr = [index, ...arr];
  console.log(obj[7]);
  // console.log(new_arr);
  for (let i = 0; i < arr.length; i++) {}
};

function solution(n, wires) {
  let connectObj = {};
  for (let i = 0; i < wires.length; i++) {
    if (connectObj[wires[i][0]] === undefined) {
      connectObj[wires[i][0]] = [wires[i][1]];
    } else {
      connectObj[wires[i][0]].push(wires[i][1]);
    }
    if (connectObj[wires[i][1]] === undefined) {
      connectObj[wires[i][1]] = [wires[i][0]];
    } else {
      connectObj[wires[i][1]].push(wires[i][0]);
    }
  }

  let highLength = Object.values(connectObj).map((item) => item.length);
  let highNumber = Math.max(...highLength);
  let highIndex = highLength.indexOf(highNumber) + 1;
  connectObj[highIndex].forEach((item, index, array) => {
    const rest = [...array.slice(0, index), ...array.slice(index + 1)];
    const sliceObj = { ...connectObj };
    sliceObj[highIndex] = rest;
    let removeNumber = sliceObj[item].splice(
      sliceObj[item].indexOf(highIndex),
      1
    );

    let sliceArr = Object.values(sliceObj);
    let checked = [[], []];
    let count = 0;
    for (let i = 0; i < sliceArr.length; i++) {
      if (count === 2) return;
      if (sliceArr[i].length > 1) {
        count++;

        checkLine(sliceArr[i], i + 1, sliceObj);
      }
    }
    sliceObj[item].push(...removeNumber);
  });
}
console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
