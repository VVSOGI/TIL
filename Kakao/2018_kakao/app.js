function solution(dartResult) {
  let Shot = [];
  let result = 0;

  dartResult = dartResult.split("");
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(Number(dartResult[i])) && !isNaN(Number(dartResult[i + 1]))) {
      let result = dartResult[i] + dartResult[i + 1];
      dartResult[i] = result;
      dartResult.splice(i + 1, 1);
    }
  }

  for (let i = 0; i < dartResult.length; i++) {
    const D = dartResult;
    if (!isNaN(Number(D[i]))) {
      if (D[i + 1] === "S") {
        let num = Math.pow(Number(D[i]), 1);
        Shot.push(num);
      }
      if (D[i + 1] === "D") {
        let num = Math.pow(Number(D[i]), 2);
        Shot.push(num);
      }
      if (D[i + 1] === "T") {
        let num = Math.pow(Number(D[i]), 3);
        Shot.push(num);
      }
    }
    if (D[i] === "*") {
      Shot.push("*2");
    }
    if (D[i] === "#") {
      Shot.push("*-1");
    }
  }

  for (let i = 0; i < Shot.length; i++) {
    if (Shot[i] === "*-1") {
      Shot[i - 1] = Shot[i - 1] * -1;
      Shot.splice(i, 1);
    }
  }

  for (let i = 0; i < Shot.length; i++) {
    if (Shot[i] === "*2" && i > 1) {
      Shot[i - 2] = Shot[i - 2] * 2;
      Shot[i - 1] = Shot[i - 1] * 2;
      Shot.splice(i, 1);
    } else if (Shot[i] === "*2" && i === 1) {
      Shot[i - 1] = Shot[i - 1] * 2;
      Shot.splice(i, 1);
    }
  }
  return Shot.reduce((a, c) => a + c);
}

console.log(solution("1D2S#10S"));
