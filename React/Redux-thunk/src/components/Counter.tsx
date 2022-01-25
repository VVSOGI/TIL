import React from "react";

type CounterPropsType = {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const Counter: React.FC<CounterPropsType> = ({
  number,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
