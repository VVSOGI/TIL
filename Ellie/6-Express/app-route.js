import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

app.use(express.json()); // REST API => Body
app.use(express.urlencoded({ extended: false })); // HTML Form => Body
app.use(express.static("public"));

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(8080);

// 설정된 순서가 아주 중요함.
// res.send를 할 때는 send가 겹치지않게 리턴해주는게 좋음
