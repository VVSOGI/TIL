import { Store } from "redux";
import { CounterAction } from "../modules/counter";

const myLogger = (store: any) => (next: any) => (action: CounterAction) => {
  const result = next(action);
  return result;
};

export default myLogger;
