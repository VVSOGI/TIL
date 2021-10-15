function solution(numbers) {
  const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let totalValue = 0;
  while (numbers.length > 0) {
    const pickNumber = numbers.pop();
    for (let i = 0; i < allNumbers.length; i++) {
      if (allNumbers[i] === pickNumber) {
        allNumbers.splice(i, 1);
      }
    }
  }
  return allNumbers.reduce((acc, cur) => acc + cur);
}
