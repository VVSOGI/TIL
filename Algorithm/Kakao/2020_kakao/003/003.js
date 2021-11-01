function solution(p) {
  let result = "";
  let leftCount = 0;
  let rightCount = 0;
  let isTrue = false;

  if (p.length === 0) {
    return "";
  }

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      leftCount++;
    }

    if (p[i] === ")") {
      rightCount++;
    }

    if (rightCount > leftCount) {
      isTrue = true;
    }

    if (leftCount === rightCount) {
      if (isTrue) {
        result += "(";
        result += solution(p.slice(i + 1, p.length));
        result += ")";

        for (let j = 1; j < i; j++) {
          if (p[j] === ")") result += "(";
          if (p[j] === "(") result += ")";
        }
        return result;
      } else {
        result += p.slice(0, i + 1);
        result += solution(p.slice(i + 1, p.length));
        return result;
      }
    }
  }
}

function reverse(str) {
  return str
    .slice(1, str.length - 1)
    .split("")
    .map((c) => (c === "(" ? ")" : "("))
    .join("");
}

function solution(p) {
  if (p.length < 1) return "";

  let balance = 0;
  let pivot = 0;
  do {
    balance += p[pivot++] === "(" ? 1 : -1;
  } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}
