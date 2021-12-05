function multiDimensionalUnique(arr) {
  let uniques = [];
  let itemsFound = {};
  for (let i = 0, l = arr.length; i < l; i++) {
    let stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}

function fourChecker(board) {
  let friendsPos = [];
  board.forEach((item, index, array) => {
    for (let i = 0; i < item.length; i++) {
      let doubleWord = item.slice(i, i + 2);
      if (
        item[i] === item[i + 1] &&
        item[i] !== "0" &&
        array[index + 1] !== undefined
      ) {
        let bottomWord = array[index + 1].slice(i, i + 2);
        if (doubleWord === bottomWord) {
          friendsPos.push(
            [index, i],
            [index, i + 1],
            [index + 1, i],
            [index + 1, i + 1]
          );
        }
      }
    }
  });
  return friendsPos;
}

function upperItemToDown(board) {
  let isChange = false;
  let changedBoard = board.map((item, index, array) => {
    for (let i = 0; i < item.length; i++) {
      if (
        item[i] !== "0" &&
        array[index + 1] !== undefined &&
        array[index + 1][i] === "0"
      ) {
        isChange = true;
        let auxChange = item[i];
        item[i] = array[index + 1][i];
        array[index + 1][i] = auxChange;
      }
    }
    return item;
  });
  if (isChange) {
    return upperItemToDown(changedBoard);
  } else {
    return changedBoard;
  }
}

function solution(m, n, board) {
  let count = 0;
  while (fourChecker(board).length > 0) {
    let checkedArr = fourChecker(board);
    let uniqueArr = multiDimensionalUnique(checkedArr);
    console.log(checkedArr);
    let boardToArr = board.map((item) => item.split(""));
    count += uniqueArr.length;

    for (let i = 0; i < uniqueArr.length; i++) {
      let [posX, posY] = uniqueArr[i];
      boardToArr[posX][posY] = "0";
    }

    boardToArr = upperItemToDown(boardToArr);
    board = boardToArr.map((item) => item.join(""));
  }
  return count;
}

console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
