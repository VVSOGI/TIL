function solution(m, musicinfos) {
  const splitArr = musicinfos.map((item) => item.split(",")),
    answer = [];
  m = getPitchesToArr(m);
  for (let i = 0; i < splitArr.length; i++) {
    let [ms, me, title, pitches] = splitArr[i];
    let cleanUpPitches = getPitchesToArr(pitches);
    let radioTime = getMusicTime(ms, me),
      musicTime = cleanUpPitches.length,
      comparisonTime = radioTime - musicTime;

    if (comparisonTime > 0) {
      // n번 더 틀었을 때
      for (let i = 0; i < comparisonTime; i++) {
        cleanUpPitches.push(cleanUpPitches[i]);
      }
    } else {
      // 짤렸거나, 딱 맞게 틀었을 때
      for (let i = 0; i < Math.abs(comparisonTime); i++) {
        cleanUpPitches.pop();
      }
    }
    if (getAnswer(cleanUpPitches, m)) {
      answer.push([title, radioTime]);
    }
  }
  if (answer.length > 0) {
    answer.sort((a, b) => b[1] - a[1]);
    return answer[0][0];
  } else {
    return "(None)";
  }
}

function getAnswer(pitches, m) {
  let check = 0,
    flag = false;
  for (let i = 0; i < pitches.length; i++) {
    if (check === m.length) break;
    if (pitches[i] === m[check] && !flag) {
      flag = true;
      check++;
    } else if (pitches[i] !== m[check] && flag) {
      check = 0;
      flag = false;
      if (pitches[i] === m[0]) {
        check++;
        flag = true;
      }
    } else if (flag) {
      check++;
    }
  }
  if (check === m.length) return true;
  return false;
}

function getPitchesToArr(pitches) {
  let arr = [],
    hash = "#";
  for (let i = 0; i < pitches.length; i++) {
    if (pitches[i + 1] === hash) {
      arr.push(pitches[i] + pitches[i + 1]);
    } else if (pitches[i] === hash) {
      continue;
    } else {
      arr.push(pitches[i]);
    }
  }
  return arr;
}

function getMusicTime(ms, me) {
  let splitTime = [ms, me].map((item) => {
    let time = item.split(":");
    time[0] = Number(time[0]) * 60;
    time[1] = Number(time[1]);
    return time;
  });
  let [hour1, hour2] = splitTime;
  return hour2[0] - hour1[0] + (hour2[1] - hour1[1]);
}

// function solution(m, musicinfos) {
//   const getMinutes = (s) => s.substr(0, 2) * 60 + +s.substr(3);

//   m = m.replace(/\w#/g, (a) => a[0].toLowerCase());

//   let answer = musicinfos
//     .map((info) => {
//       info = info.split(",");

//       let playMinutes = getMinutes(info[1]) - getMinutes(info[0]),
//         melody = info[3].replace(/\w#/g, (a) => a[0].toLowerCase());

//       melody =
//         playMinutes > melody.length
//           ? melody.padEnd(playMinutes, melody)
//           : melody.substr(0, playMinutes);

//       return {
//         playMinutes: playMinutes,
//         melody: melody,
//         name: info[2],
//         startTime: getMinutes(info[0]),
//       };
//     })
//     .filter((info) => new RegExp(m).test(info.melody));

//   if (answer.length) {
//     if (answer.length > 1) {
//       answer = answer.filter(
//         (v) =>
//           v.playMinutes >= Math.max(...answer.map((val) => val.playMinutes))
//       );

//       if (answer.length > 1) {
//         answer = answer.filter(
//           (v) => v.startTime <= Math.min(...answer.map((val) => val.startTime))
//         );
//       }
//     }

//     return answer[0].name;
//   }

//   return "(None)";
// }

console.log(
  solution("ABC", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
