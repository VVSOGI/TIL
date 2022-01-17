function solution(skill, skill_trees) {
  let skillArr = skill.split(""),
    skillTreeArr,
    answer = 0;
  skillTreeArr = skill_trees.map((item) => item.split(""));

  while (skillTreeArr.length) {
    let flag = true,
      start = 0;
    let queue = skillTreeArr.shift();
    for (let i = 0; i < queue.length; i++) {
      if (skillArr.indexOf(queue[i]) > -1 && skillArr[start] === queue[i]) {
        start++;
      } else if (
        skillArr.indexOf(queue[i]) > 0 &&
        skillArr[start] !== queue[i]
      ) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
