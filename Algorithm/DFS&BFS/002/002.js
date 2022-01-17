function solution(n) {
  let start = [0, 0],
    answer,
    checkArray,
    cycle = 0,
    flag = true,
    num = 1;
  checkArray = new Array(n).fill(0).map((item) => new Array(n).fill(item));

  while (flag) {
    let test = down(start, checkArray, num, cycle, cycle + 10);
    if (test) {
      let [posX, posY] = test[0];
      let nextNumber = test[1];
      let newCycle = test[2];
      start[0] = posX;
      start[1] = posY;
      num = nextNumber;
      cycle = newCycle;
    } else {
      flag = false;
    }
  }

  answer = checkArray.flat().filter((item) => item !== 0);
  return answer;
}

function down(pos, map, num, cycle, end) {
  if (cycle === end) {
    return [pos, num, cycle];
  }

  let [xPos, yPos] = pos;
  let newPos;

  if (xPos < map.length && map[xPos][yPos] === 0) {
    map[xPos][yPos] = num;
    xPos++;
    newPos = [xPos, yPos];
    num++;
    if (xPos === map.length - cycle) {
      xPos--;
      yPos++;
      newPos = [xPos, yPos];
      return right(newPos, map, num, cycle, end);
    }
    return down(newPos, map, num, cycle, end);
  }
}

function right(pos, map, num, cycle, end) {
  let [xPos, yPos] = pos;
  let newPos;

  if (yPos < map.length && map[xPos][yPos] === 0) {
    map[xPos][yPos] = num;
    yPos++;
    num++;
    newPos = [xPos, yPos];
    if (yPos === map.length - cycle * 2) {
      xPos--;
      yPos = yPos - 2;
      newPos = [xPos, yPos];
      return up(newPos, map, num, cycle, end);
    }
    return right(newPos, map, num, cycle, end);
  }
}

function up(pos, map, num, cycle, end) {
  let [xPos, yPos] = pos;
  let newPos;

  if (map[xPos][yPos] === 0) {
    map[xPos][yPos] = num;
    xPos--;
    yPos--;
    num++;
    newPos = [xPos, yPos];
    if (map[xPos][yPos] !== 0) {
      xPos = xPos + 2;
      yPos = yPos + 1;
      newPos = [xPos, yPos];
      cycle++;
      return down(newPos, map, num, cycle, end);
    }
    return up(newPos, map, num, cycle, end);
  }
}

console.log(solution(30));
