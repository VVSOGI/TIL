import { createAction, ActionType, createReducer } from "typesafe-actions";
import { actions } from "./actions";

export type CounterAction = ActionType<typeof actions>;
export type CounterState = { count: number };
