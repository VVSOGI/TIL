function solution(name) {
  var answer = 0;
  var alpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); //  24
  var targetArr = [];

  for (var i in name) {
    targetArr.push(alpabet.indexOf(name[i]));
    answer +=
      alpabet.indexOf(name[i]) <= 13
        ? alpabet.indexOf(name[i])
        : 26 - alpabet.indexOf(name[i]);
  }
  console.log(targetArr);

  var move = name.length - 1;
  for (var i in targetArr) {
    if (targetArr[i] == 0) {
      var cnt0 = 1;
      for (var j = parseInt(i) + 1; j < targetArr.length; j++) {
        if (targetArr[j] == 0) {
          cnt0++;
        } else {
          break;
        }
      }
      var left_move = i == 0 ? 0 : (parseInt(i) - 1) * 2;
      //   console.log(left_move, cnt0);
      var left = left_move + (targetArr.length - cnt0 - parseInt(i));
      console.log(move, left);
      if (move > left) move = left;
    }
  }
  return answer + move;
}
console.log(solution("BABADA"));
