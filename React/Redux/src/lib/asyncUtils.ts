import { PostState } from "../modules/posts";

export const createPromiseThunk = (
  type: string,
  promiseCreator: (props: number) => void
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param: number | null) =>
    async (dispatch: (item: any) => void, currentValue: () => void) => {
      dispatch({ type, param });
      try {
        const payload = await promiseCreator(param !== null ? param : 0);
        dispatch({ type: SUCCESS, payload });
      } catch (e) {
        dispatch({ type: ERROR, payload: e, error: true });
      }
    };
};

export const reducerUtils = {
  inital: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (payload: {}) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (error: any) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

export const handleAsyncActions = (type: string, key: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state: PostState, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };
      case SUCCESS: {
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      }
      case ERROR: {
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      }
      default:
        return state;
    }
  };
};
