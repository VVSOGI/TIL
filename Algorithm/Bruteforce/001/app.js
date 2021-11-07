function solution(places) {
  let result = [];

  const partitionRule = (pos1, pos2, map) => {
    if (pos1[0] === pos2[0]) {
      let between = Math.abs(pos1[1] + pos2[1]) / 2;
      if (map[pos1[0]][between] === "X") return true;
    } else if (pos1[1] === pos2[1]) {
      let between = Math.abs(pos1[0] + pos2[0]) / 2;
      if (map[between][pos1[1]] === "X") return true;
    } else if (map[pos1[0]][pos2[1]] === "X" && map[pos2[0]][pos1[1]] === "X") {
      return true;
    }
    return false;
  };

  const getManhatten = (pos1, pos2) => {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
  };

  const positionCheckAux = (p, map) => {
    for (let i = 0; i < p.length; i++) {
      let checkPosition = false;

      for (let j = i + 1; j < p.length; j++) {
        if (getManhatten(p[i], p[j]) < 2) return false;
        if (getManhatten(p[i], p[j]) === 2) {
          const ruleCheck = partitionRule(p[i], p[j], map);
          if (ruleCheck === false) return false;
        }
      }
      if (checkPosition === true) return false;
    }
    return true;
  };

  for (let eachPlace of places) {
    let people = [];
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (eachPlace[y][x] === "P") people.push([y, x]);
      }
    }
    console.log(people);
    let check = positionCheckAux(people, eachPlace);
    if (check) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return result;
}
console.log(
  solution([
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
