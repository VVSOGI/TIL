function solution(participant, completion) {
  // 단 한명의 완주하지 못한 선수의 이름을 리턴한다.
  // 배열을 sort를 이용하여 정리한다음 반복문으로 비교한다.
  // 참가자와 완주자의 이름이 달라지는 순간 반복문을 멈춘다.
  // 참가자의 이름을 리턴한다.
  // 시간복잡도는 O(N)
  const sortedP = participant.sort();
  const sortedC = completion.sort();
  for (let i = 0; i < sortedP.length; i++) {
    if (sortedP[i] !== sortedC[i]) {
      return sortedP[i];
    }
  }
}
