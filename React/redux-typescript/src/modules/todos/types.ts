import { ActionType } from "typesafe-actions";
import { addTodo, removeTodo, toggleTodo } from "../todos";

const actions = { addTodo, toggleTodo, removeTodo };
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export type TodosAction = ActionType<typeof actions>;
export type TodosState = Todo[];
