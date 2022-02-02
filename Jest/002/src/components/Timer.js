import React from "react";

const Timer = () => {
  const now = Date.now();
  const sec = new Date(now).getSeconds();
  return <h1>현재는 {sec}초 입니다.</h1>;
};

export default Timer;
