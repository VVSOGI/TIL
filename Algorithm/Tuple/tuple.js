function solution(s) {
  let numberButton = false;
  let numberWord = "";
  let numbers = [];
  let eachNumber = [];
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i])) === false && numberButton === false) {
      numberButton = true;
      numberWord += s[i];
    } else if (isNaN(Number(s[i])) === false && numberButton === true) {
      numberWord += s[i];
    } else if (s[i] === "," && numberButton === true) {
      eachNumber.push(Number(numberWord));
      numberButton = false;
      numberWord = "";
    } else if (s[i] === "}" && numberButton === true) {
      eachNumber.push(Number(numberWord));
      numbers.push(eachNumber);
      eachNumber = [];
      numberWord = "";
      numberButton = false;
    }
  }

  const sortedNumbers = numbers.sort((a, b) => a.length - b.length);
  sortedNumbers.forEach((item) => {
    item.forEach((value) => {
      if (result.filter((item) => item === value).length === 0) {
        result.push(value);
      }
    });
  });
  return result;
}
