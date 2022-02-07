import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(helmet());

app.get("/", (req, res, next) => {
  res.status(201).json({ message: "Hello!" });
});

app.listen(8080);
