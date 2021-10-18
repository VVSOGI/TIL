function isValid(LS, RS) {
  // LS = Lost Students
  // RS = Reserve Student
  for (let i = 0; i < LS.length; i++) {
    let downNumber = RS - 1;
    let upNumber = RS + 1;
    if (LS[i] === downNumber) {
      return LS[i];
    } else if (LS[i] === upNumber) {
      return LS[i];
    }
  }
  return false; // basic result
}

function isReserveLost(LS, RS) {
  // LS = Lost Students
  // RS = Reserve Student
  // 만약에 checkDifference의 값이 LS의 길이와 다르다면 빌려주는 학생의 배열과
  // 잃어버린 학생의 배열에 같은 값이 들어가 있다는 뜻.
  // 도둑이 여분의 체육복을 가져온 학생의 옷을 가져갔다는 의미.
  const checkDifference = LS.filter((item) => item !== RS).length;
  return checkDifference === LS.length;
}

function solution(n, lost, reserve) {
  // 만약 주어진 매개 변수들이 5, [4,2], [3,5]이라면
  // 빌려주는 학생 3은 2를 빌려주고 학생 5는 4를 빌려주는게 가장 많은 학생이 수업을 들을 수 있는
  // 방법이다. 만약에 정렬을 하지 않는다면, 로직의 순서상 학생 3은 4번 학생에게 옷을 빌려주게 되고,
  // 2번 학생은 5번 학생과 옷의 사이즈가 맞지 않기 때문에 총 4명만이 수업을 들을 수 있다.
  // 이러한 경우를 배제하기 위해서 들어오는 배열을 순서대로 정렬할 필요가 있다.
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  // 여벌이 있는 학생이 도난 당했을 경우 체크
  for (let i = 0; i < reserve.length; i++) {
    if (!isReserveLost(lost, reserve[i])) {
      lost = lost.filter((item) => item !== reserve[i]);
      reserve = reserve.filter((item) => item !== reserve[i]);
      i--;
    }
  }

  // 여벌이 있는 학생 중 위 아래로 번호가 있는지 체크.
  for (let i = 0; i < reserve.length; i++) {
    if (isValid(lost, reserve[i])) {
      lost = lost.filter((item) => item !== isValid(lost, reserve[i]));
    }
  }
  const resultReserve = n - lost.length;
  return resultReserve;
}

console.log(solution(5, [3, 2], [3, 5]));

function isValid(LS, RS) {
  // LS = Lost Students
  // RS = Reserve Student
  for (let i = 0; i < LS.length; i++) {
    let downNumber = RS - 1;
    let upNumber = RS + 1;
    if (LS[i] === downNumber) {
      return LS[i];
    } else if (LS[i] === upNumber) {
      return LS[i];
    }
  }
  return false; // basic result
}

function isReserveLost(LS, RS) {
  // LS = Lost Students
  // RS = Reserve Student
  // 재귀함수를 이용한 이진 탐색 알고리즘 사용.
  if (LS.length === 0) {
    return false;
  }
  const halfLS = Math.floor(LS.length / 2);
  if (RS < LS[halfLS]) {
    const newLS = LS.slice(0, halfLS);
    return isReserveLost(newLS, RS);
  } else if (RS > LS[halfLS]) {
    const newLS = LS.slice(halfLS + 1);
    return isReserveLost(newLS, RS);
  } else {
    return true;
  }
}

function solution(n, lost, reserve) {
  // 만약 주어진 매개 변수들이 5, [4,2], [3,5]이라면
  // 빌려주는 학생 3은 2를 빌려주고 학생 5는 4를 빌려주는게 가장 많은 학생이 수업을 들을 수 있는
  // 방법이다. 만약에 정렬을 하지 않는다면, 로직의 순서상 학생 3은 4번 학생에게 옷을 빌려주게 되고,
  // 2번 학생은 5번 학생과 옷의 사이즈가 맞지 않기 때문에 총 4명만이 수업을 들을 수 있다.
  // 이러한 경우를 배제하기 위해서 들어오는 배열을 순서대로 정렬할 필요가 있다.
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  // 여벌이 있는 학생이 도난 당했을 경우 체크
  for (let i = 0; i < reserve.length; i++) {
    if (isReserveLost(lost, reserve[i])) {
      lost = lost.filter((item) => item !== reserve[i]);
      reserve = reserve.filter((item) => item !== reserve[i]);
      i--;
    }
  }

  // 여벌이 있는 학생 중 위 아래로 번호가 있는지 체크.
  for (let i = 0; i < reserve.length; i++) {
    if (isValid(lost, reserve[i])) {
      lost = lost.filter((item) => item !== isValid(lost, reserve[i]));
    }
  }
  const resultReserve = n - lost.length;
  return resultReserve;
}

function solution(n, lost, reserve) {
  let answer = n;

  // 1. 현재 학생별 운동복 보유 수
  let student = new Array(n).fill(1);
  for (let i = 0; i < student.length; i++) {
    if (lost.includes(i + 1)) {
      student[i] -= 1;
    }
    if (reserve.includes(i + 1)) {
      student[i] += 1;
    }
  }

  // 2. 운동복이 2개 있는 학생들이 0인 친구들에게 빌려주기
  for (let i = 0; i < student.length; i++) {
    if (student[i] === 2 && student[i - 1] === 0) {
      student[i] -= 1;
      student[i - 1] += 1;
    }
    if (student[i] === 0 && student[i - 1] === 2) {
      student[i] += 1;
      student[i - 1] -= 1;
    }
  }

  for (let i = 0; i < student.length; i++) {
    if (student[i] === 0) {
      answer--;
    }
  }

  return answer;
}
