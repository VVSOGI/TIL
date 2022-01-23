function solution(id_list, report, k) {
  const totalObj = {}; // 어떤 유저가 있는지 확인.
  for (let i = 0; i < id_list.length; i++) {
    totalObj[id_list[i]] = [];
  }

  const splitReport = report.map((item) => item.split(" "));
  for (let i = 0; i < splitReport.length; i++) {
    const [reporter, reportee] = splitReport[i];
    const isInReportArr = totalObj[reporter].indexOf(reportee) < 0;
    if (isInReportArr) totalObj[reporter].push(reportee);
    // 신고한 사람은 key값 신고 당한 사람은 배열 value에 push.
  }

  const valuesArr = Object.values(totalObj).flat();
  const reportNumberObj = {}; // 1번 이상 신고를 받은 사람들.

  for (let i = 0; i < valuesArr.length; i++) {
    if (reportNumberObj[valuesArr[i]]) {
      reportNumberObj[valuesArr[i]]++;
    } else {
      reportNumberObj[valuesArr[i]] = 1;
    }
  }

  const reportMoreK = Object.entries(reportNumberObj)
    .filter((item) => item[1] >= k)
    .map((item) => item[0]); // k번 이상 신고 당한 사람들의 리스트.

  const answer = Object.values(totalObj).map((item) => {
    let count = 0;
    for (let i = 0; i < item.length; i++) {
      if (reportMoreK.indexOf(item[i]) > -1) count++;
    }
    return count;
  });

  return answer;
}
