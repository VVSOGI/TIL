const checkRule = (str) => {
  let pattern = /^[a-zA-Z]+$/;
  if (pattern.test(str) === true) {
    return true;
  } else {
    return false;
  }
};

function solution(str1, str2) {
  let answer = 0;
  let str1Arr = [];
  let str2Arr = [];
  str1.split("").reduce((acc, cur) => {
    if (checkRule(acc + cur)) {
      str1Arr.push(acc.toUpperCase() + cur.toUpperCase());
    }
    return cur;
  });
  str2.split("").reduce((acc, cur) => {
    if (checkRule(acc + cur)) {
      str2Arr.push(acc.toUpperCase() + cur.toUpperCase());
    }
    return cur;
  });
  if (!str1Arr.length && !str2Arr.length) return 65536;

  let union = [];
  let intersect = [];

  for (let i = 0; i < str2Arr.length; i++) {
    if (str1Arr.indexOf(str2Arr[i]) >= 0) {
      intersect.push(str1Arr.splice(str1Arr.indexOf(str2Arr[i]), 1)); //***교집합
    }
    union.push(str2Arr[i]);
  }

  for (let i = 0; i < str1Arr.length; i++) {
    union.push(str1Arr[i]);
  }

  if (union.length === 0) {
    answer = 65536;
  } else {
    answer = Math.floor((intersect.length / union.length) * 65536);
  }

  return answer;
}

console.log(solution("handshake", "shake hands"));
