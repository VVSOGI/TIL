function solution(grid) {
  let direction = ["down", "up", "left", "right"],
    answer = [],
    movement = [];
  for (let i = 0; i < direction.length; i++) {
    let check = findWay(direction[i], [0, 0], [1, 0], movement);
  }
}

function findWay(dir, from, to, movement) {
  movement.push([from, to, dir]);
  if (movement)

  switch (dir) {
    case "down":
      break;
    case "up":
      break;
    case "left":
      break;
    case "right":
      break;
    default:
      return;
  }
}

solution(["SL", "LR"]);
