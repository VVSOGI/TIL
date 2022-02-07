import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {
  //   try {
  //     const data = fs.readFileSync("/file.txt");
  //   } catch (error) {
  //     res.status(404).json({ message: "File not found" });
  //   } 동기

  fs.readFile("/file.txt", (err, data) => {
    if (err) {
      return res.status(404).json({ message: "File not found" });
    }
  }); // 비동기
});

app.get("/file2", (req, res) => {
  return fsAsync.readFile("/file.txt");

  // 비동기는 try catch로 에러를 잡을 수 없다. 내부에서 문제가 발생했기 때문에 밖에서 알지 못한다.
});

app.get("/file3", async (req, res) => {
  const data = await fsAsync.readFile("/file.txt");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong..." });
});

app.listen(8080);

// 설정된 순서가 아주 중요함.
// res.send를 할 때는 send가 겹치지않게 리턴해주는게 좋음
