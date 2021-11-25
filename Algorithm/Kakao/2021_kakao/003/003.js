// const checkData = (info, language, field, career, food, score) => {
//   const infoLanguage = 0;
//   const infoField = 1;
//   const infoCareer = 2;
//   const infoLikeFood = 3;
//   const infoScore = 4;
//   let anyThing = false;

//   if (
//     language === "-" ||
//     field === "-" ||
//     career === "-" ||
//     food === "-" ||
//     score === "-"
//   ) {
//     anyThing = true;
//   }

//   if (language !== "-")
//     info = info.filter((item) => item[infoLanguage] === language);
//   if (field !== "-") info = info.filter((item) => item[infoField] === field);
//   if (career !== "-") info = info.filter((item) => item[infoCareer] === career);
//   if (food !== "-") info = info.filter((item) => item[infoLikeFood] === food);
//   if (score !== "-")
//     info = info.filter((item) => Number(item[infoScore]) >= Number(score));

//   let manData = info.filter((item) => {
//     let newLen;
//     let newField;
//     let newCareer;
//     let newFood;
//     let newScore;
//     if (anyThing === true) {
//       language === "-" ? (newLen = item[infoLanguage]) : (newLen = language);
//       field === "-" ? (newField = item[infoField]) : (newField = field);
//       career === "-" ? (newCareer = item[infoCareer]) : (newCareer = career);
//       food === "-" ? (newFood = item[infoLikeFood]) : (newFood = food);
//       score === "-" ? (newScore = Number(item[infoScore])) : (newScore = score);
//       if (
//         item[infoLanguage] === newLen &&
//         item[infoField] === newField &&
//         item[infoCareer] === newCareer &&
//         item[infoLikeFood] === newFood &&
//         Number(item[infoScore]) >= Number(newScore)
//       ) {
//         return true;
//       }
//     } else {
//       if (
//         item[infoLanguage] === language &&
//         item[infoField] === field &&
//         item[infoCareer] === career &&
//         item[infoLikeFood] === food &&
//         Number(item[infoScore]) >= Number(score)
//       ) {
//         return true;
//       }
//     }
//   });
//   return manData.length;
// };

// const solution = (info, query) => {
//   let infoDetail = info.map((item) => item.split(" "));
//   let queryDetail = query.map((item) => item.split(" "));
//   let result = [];

//   const queryLanguage = 0;
//   const queryField = 2;
//   const queryCareer = 4;
//   const queryLikeFood = 6;
//   const queryScore = 7;

//   queryDetail.forEach((item) => {
//     let howMany = checkData(
//       infoDetail,
//       item[queryLanguage],
//       item[queryField],
//       item[queryCareer],
//       item[queryLikeFood],
//       item[queryScore]
//     );
//     result.push(howMany);
//   });

//   return result;
// }; 직접 만들어본 코드. 쿼리 한 줄에 인포가 일치하는게 몇개인지 리턴하는 함수를 만들어
// 배열에 담아 리턴하는 코드. ==> 결과는 잘 실행되나, 시간 복잡도에서 탈락.

const combination = (array, score, start, infoMap) => {
  const key = array.join("");
  const value = infoMap[key];

  if (value) {
    infoMap[key].push(score);
  } else {
    infoMap[key] = [score];
  }

  for (let i = start; i < array.length; i++) {
    const temp = [...array];
    temp[i] = "-";
    combination(temp, score, i + 1, infoMap);
  }
};

const solution = (info, query) => {
  const answer = [];
  const infoMap = {};

  for (let item of info) {
    const splited = item.split(" ");
    const score = Number(splited.pop());
    combination(splited, score, 0, infoMap);
  }

  for (let key in infoMap) {
    infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }

  for (let item of query) {
    const splited = item.replace(/ and /g, " ").split(" ");
    const score = Number(splited.pop());
    const key = splited.join("");
    const array = infoMap[key];

    if (array) {
      let start = 0;
      let end = array.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (array[mid] >= score) {
          end = mid;
        } else if (array[mid] < score) {
          start = mid + 1;
        }
      }
      console.log(start === end);
      const result = array.length - end;
      answer.push(result);
    } else {
      answer.push(0);
    }
  }
  return answer;
};

console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
