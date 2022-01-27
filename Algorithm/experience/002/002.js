function solution(n) {
  const binaryNumber = n.toString(2);
  let count1 = 0;

  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === "1") count1++;
  }

  while (true) {
    const nextNumber = n + 1,
      nextBinaryNumber = nextNumber.toString(2);

    let nextCount = 0;
    for (let i = 0; i < nextBinaryNumber.length; i++) {
      if (nextBinaryNumber[i] === "1") nextCount++;
    }

    if (nextCount === count1) return nextNumber;
    n++;
  }
}

console.log(solution(78));
