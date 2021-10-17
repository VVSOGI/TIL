function paveBox(boxes) {
  let answer = [];

  // boxes 배열이 0보다 클 때까지 반복합니다.
  while (boxes.length > 0) {
    let finishIndex = boxes.findIndex((fn) => boxes[0] < fn);

    if (finishIndex === -1) {
      // 만약 찾지 못했다면 answer에 boxes 배열의 길이를 넣은 후, boxes 내부의 요소를 전부 삭제합니다.
      answer.push(boxes.length);
      boxes.splice(0, boxes.length);
    } else {
      // 만약 찾았다면, 해당 인덱스를 answer에 넣고, boxes에서 그만큼 제외합니다.
      answer.push(finishIndex);
      boxes.splice(0, finishIndex);
    }
  }

  // 결과물을 반환합니다.
  return Math.max(...answer);
}

let boxes = [5, 1, 4, 6];
let output = paveBox(boxes);
console.log(output); // 3
