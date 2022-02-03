const fs = require("fs");

// 3
// rename(..., callback(error, data))
// try {renameSync(....)} catch {}
// promises.rename().then().catch()

try {
  fs.renameSync("./file.txt", "./file-new.txt");
} catch (error) {
  console.error(error);
}

fs.rename("./file.txt", "./file-new.txt", (error) => {
  console.log(error);
});

fs.promises
  .rename("./file-new.txt", "./file.txt")
  .then(() => console.log("done"))
  .catch((e) => console.log(e));

// GUI로 변환하는 느낌이 아닌 CLI 형식의 느낌이 강하다.
// 총 3가지 방법이 있는데 renameSync는 try catch를 사용해야하고,
// rename은 3번째 인자에 콜백 함수를 적어줘서 error 처리를 해주고,
// promises.rename은 promise then 체인을 이용한다.
// 아마도 가장 널리 사용되는 방법은 promises 방법일 듯?
// 자동으로 뭔가를 수정하기 위해서 사용할 것 같은 느낌이 강렬하게 든다.
