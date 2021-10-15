function isCheck(str, obj) {
  for (let key in obj) {
    if (str === key) {
      return obj[key];
    }
  }
  return false;
}

function solution(s) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let str = "";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i])) === false) {
      result = result + s[i];
      continue;
    }
    str = str + s[i];
    if (isCheck(str, obj) !== false) {
      result = result + String(isCheck(str, obj));
      str = "";
    }
  }

  return Number(result);
}

console.log(solution("one4seveneight"));
