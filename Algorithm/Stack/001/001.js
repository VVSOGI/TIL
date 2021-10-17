function solution(priorities, location) {
  let count = 0;
  // 총 카운트 갯수
  while (priorities.length) {
    const maxNum = Math.max(...priorities);
    // 배열의 가장 높은 숫자.
    const shift = priorities.shift();
    // stack
    location--;
    // stack을 이용해 하나씩 빼면 로케이션의 위치도 -- 해준다.
    if (maxNum === shift) {
      count++;
    }
    // 가장 앞의 숫자가 가장 큰 숫자면 카운트++
    if (maxNum === shift && location < 0) {
      return count;
      // 지정해둔 숫자가 가장 큰 숫자이고 가장 앞에 있다면 count리턴
    } else if (maxNum > shift) {
      priorities.push(shift);
      // 가장 앞의 숫자가 가장 큰 숫자가 아니면 다시 뒤로 넣어준다.
    }
    if (location < 0) {
      location = priorities.length - 1;
      // 로케이션이 가장 앞에 있으나 가장 큰 숫자가 아니면 다시 뒤로.
    }
  }
  return count;
}
