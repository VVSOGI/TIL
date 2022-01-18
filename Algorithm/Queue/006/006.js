function solution(fees, records) {
  const IF_NOT_OUT = 1439;
  const sortRecords = records.sort((a, b) => {
    return a.split(" ")[1] - b.split(" ")[1];
  });
  let cumulativeParkingTime = [],
    carNumber = "",
    lastCarNumber = "",
    userPayObj = {},
    answer;

  for (let i = 0; i < sortRecords.length; i++) {
    let cur = sortRecords[i].split(" ");
    userPayObj[cur[1]] = 0;
  }

  while (sortRecords.length) {
    let queue = sortRecords.shift().split(" ");
    let [time, auth, action] = queue;
    let timeToMinute = handleTimeCheck(time);

    if (sortRecords.length === 0) lastCarNumber = auth;

    if (carNumber.length === 0) carNumber = auth;

    if (handleAuthCheck(carNumber, auth)) {
      if (action === "IN") {
        cumulativeParkingTime[0] = timeToMinute;
      } else {
        cumulativeParkingTime[1] = timeToMinute;
        const [inTime, outTime] = cumulativeParkingTime;
        userPayObj[auth] += outTime - inTime;
        cumulativeParkingTime = [];
      }
    } else {
      if (cumulativeParkingTime[0]) {
        cumulativeParkingTime[1] = IF_NOT_OUT;
        const [inTime, outTime] = cumulativeParkingTime;
        userPayObj[carNumber] += outTime - inTime;
        cumulativeParkingTime = [];
        cumulativeParkingTime[0] = timeToMinute;
        carNumber = auth;
      } else {
        carNumber = auth;
        cumulativeParkingTime[0] = timeToMinute;
      }
    }
  }

  if (cumulativeParkingTime.length > 0) {
    cumulativeParkingTime[1] = IF_NOT_OUT;
    const [inTime, outTime] = cumulativeParkingTime;
    userPayObj[lastCarNumber] += outTime - inTime;
    cumulativeParkingTime = [];
  }

  let objToArr = Object.entries(userPayObj).sort(
    (a, b) => Number(a[0]) - Number(b[0])
  );

  answer = objToArr.map((item) => {
    let [basicTime, fee, unit, unitFee] = fees;
    let calcTime = item[1] - basicTime;

    calcTime > 0 ? calcTime : (calcTime = 0);
    return handlePayCalculate(fee, calcTime, unit, unitFee);
  });

  return answer;
}

function handlePayCalculate(fee, time, unit, unitFee) {
  return fee + Math.ceil(time / unit) * unitFee;
}

function handleTimeCheck(time) {
  const timeToArray = time.split(":");
  const [hour, minute] = timeToArray;
  let totalTime = Number(hour) * 60 + Number(minute);
  return totalTime;
}

function handleAuthCheck(acc, cur) {
  if (acc === cur) {
    return true;
  } else {
    return false;
  }
}

console.log(solution([1, 1, 1, 1], ["00:00 1234 IN"]));
