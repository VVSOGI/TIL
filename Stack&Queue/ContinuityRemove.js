function solution(s) {
  let stack = [s[s.length - 1]];
  let arr = s.split("").slice(0, s.length - 1);

  while (arr.length > 0) {
    let minus = arr.pop();
    let lastStack = stack[stack.length - 1];

    if (lastStack === minus) {
      stack.pop();
    } else {
      stack.push(minus);
    }
  }
  return stack.length > 0 ? 0 : 1;
}
