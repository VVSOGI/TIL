import { AsyncActionCreatorBuilder } from "typesafe-actions";

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;

export default function createAsyncThunk<
  A extends AnyAsyncActionCreator,
  F extends (...params: any[]) => Promise<any>
>() {}
