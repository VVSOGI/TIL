function solution(files) {
  return files.sort((a, b) => {
    const headA = a.match(/^\D+/)[0].toLowerCase();
    const headB = b.match(/^\D+/)[0].toLowerCase();

    if (headA < headB) {
      return -1;
    }
    if (headA > headB) {
      return 1;
    }

    const numberA = a.match(/\d+/)[0].replace(/^0+/, "");
    const numberB = b.match(/\d+/)[0].replace(/^0+/, "");
    return numberA - numberB;
  });
}

console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
