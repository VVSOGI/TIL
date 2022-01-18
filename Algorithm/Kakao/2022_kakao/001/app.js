function solution(n, k) {
  let binaryNum = String(n.toString(k)).split(""),
    findNum = "",
    answer = [];
  binaryNum.push("0");

  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] !== "0") {
      findNum += binaryNum[i];
    } else {
      let check = isPrime(Number(findNum));
      check ? answer.push(findNum) : null;
      findNum = "";
    }
  }
  return answer.length;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution(110011, 10));
