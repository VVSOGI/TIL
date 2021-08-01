function solution(numbers, hand) {
  const phoneNumber = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  let queue = numbers.slice();
  let result = "";
  let leftPosition = [[3, 0]];
  let rightPosition = [[3, 2]];
  const dequeue = () => {
    return queue.shift();
  };
  while (queue.length > 0) {
    let recentNumber = dequeue();
    for (let i = 0; i < phoneNumber.length; i++) {
      if (phoneNumber[i][0] === recentNumber) {
        result = result + "L";
        leftPosition.push([i, 0]);
        break;
      }
      if (phoneNumber[i][2] === recentNumber) {
        result = result + "R";
        rightPosition.push([i, 2]);
        break;
      }
      if (phoneNumber[i][1] === recentNumber) {
        let LL = leftPosition.length;
        let RL = rightPosition.length;
        let [LPL, LPR] = leftPosition[LL - 1];
        let [RPL, RPR] = rightPosition[RL - 1];
        const fromToLeft = Math.abs(i - LPL) + Math.abs(1 - LPR);
        const fromToRight = Math.abs(i - RPL) + Math.abs(1 - RPR);
        if (fromToLeft < fromToRight) {
          result = result + "L";
          leftPosition.push([i, 1]);
        } else if (fromToRight < fromToLeft) {
          result = result + "R";
          rightPosition.push([i, 1]);
        } else if (fromToLeft === fromToRight) {
          if (hand === "left") {
            result = result + "L";
            leftPosition.push([i, 1]);
          } else {
            result = result + "R";
            rightPosition.push([i, 1]);
          }
        }
        break;
      }
    }
  }
  // 모든 경우들을 if 조건으로 나눠서 볼 수 있게끔 했다.
  // numbers의 앞 부분들부터 차례대로 테스트를 하고 싶었기 때문에
  // queue 자료구조를 이용해서 하나씩 dequeue를 해줌으로써 숫자 하나하나를
  // 반복문으로 확인하면서 풀 수 있었다.
  // 1,4,7은 왼손 3,6,9는 오른손으로 조건을 줬고,
  // 나머지는 현재 왼손과 오른손의 위치를 비교해서 더 가까운 쪽 손으로 더해줘야 하기에
  // 각각 움직인 위치를 leftPosition과 rightPosition 배열에 넣어주고
  // 배열의 마지막 값이 결국엔 최근의 위치를 의미하기에 LL과 RL이라는 배열의 총 길이 변수를
  // 만든 후에 LPL LPR RPL RPR로 최근의 위치들을 구조분해할당으로 변수 선언을 해줬다.
  // 그리고 움직인 거리를 알기 위해서 Math.abs 메서드로 목표지점과 현재 위치의 거리를 구했다.
  // 더 작은 쪽이 더 가까운 쪽이 될 것인데, 두 개의 거리가 같은 경우에는 오른손잡이와 왼손잡이의 구분을 두어서
  // 각각 알맞은 값을 result 변수에 추가해줬다.
  return result;
}

const numbers = [5, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";
console.log(solution(numbers, hand));
