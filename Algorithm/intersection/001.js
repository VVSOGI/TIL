function solution(line) {
  let interPos = [],
    compareHighY = -Infinity,
    compareRowY = Infinity,
    compareHighX = -Infinity,
    compareRowX = Infinity,
    answer,
    distanceX,
    distanceY;
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let intersectionX, intersectionY;
      intersectionX = Number(
        (line[i][1] * line[j][2] - line[i][2] * line[j][1]) /
          (line[i][0] * line[j][1] - line[i][1] * line[j][0])
      );
      intersectionY = Number(
        (line[i][2] * line[j][0] - line[i][0] * line[j][2]) /
          (line[i][0] * line[j][1] - line[i][1] * line[j][0])
      );

      if (Number.isInteger(intersectionX) && Number.isInteger(intersectionY)) {
        intersectionX === -0 ? (intersectionX = 0) : intersectionX;
        interPos.push([intersectionX, intersectionY]);
      }
      if (
        compareHighY < intersectionY &&
        Number.isInteger(intersectionX) &&
        Number.isInteger(intersectionY)
      ) {
        compareHighY = intersectionY;
      }
      if (
        compareRowY > intersectionY &&
        Number.isInteger(intersectionX) &&
        Number.isInteger(intersectionY)
      ) {
        compareRowY = intersectionY;
      }
      if (
        compareHighX < intersectionX &&
        Number.isInteger(intersectionX) &&
        Number.isInteger(intersectionY)
      ) {
        compareHighX = intersectionX;
      }
      if (
        compareRowX > intersectionX &&
        Number.isInteger(intersectionX) &&
        Number.isInteger(intersectionY)
      ) {
        compareRowX = intersectionX;
      }
    }
  }
  distanceY = Math.abs(compareHighY - compareRowY);
  distanceX = Math.abs(compareHighX - compareRowX);

  answer = new Array(distanceY + 1).fill(".").map((item) => {
    let arr = [];
    for (let i = 0; i <= distanceX; i++) {
      arr.push(item);
    }
    return arr;
  });

  for (let i = 0; i < interPos.length; i++) {
    let posX = Math.abs(compareRowX - interPos[i][0]);
    let posY = Math.abs(compareHighY - interPos[i][1]);
    answer[posY][posX] = "*";
  }

  return answer.map((item) => item.join(""));
}

console.log(
  solution([
    [2, -2, -4],
    [-2, -2, -4],
    [0, 1, -1],
    [2, -1, 3],
  ])
);
