import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { RootState } from "../modules";
import {
  decrease,
  decreaseAsnyc,
  increase,
  increaseAsnyc,
} from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsnyc());
  };

  const onDecrease = () => {
    dispatch(decreaseAsnyc());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
