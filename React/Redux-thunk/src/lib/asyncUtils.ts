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

export const handleAsyncActions = (
  type: string,
  key: string,
  keepData = false
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state: any, action: any) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
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
          [key]: reducerUtils.error(action.error),
        };
      }
      default:
        return state;
    }
  };
};

const defaultIdSelector = (param: number) => param;
export const createPromiseThunkById = (
  type: string,
  promiseCreator: (param: number) => void,
  idSelector = defaultIdSelector
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param: number) => async (dispatch: any) => {
    const id = idSelector(param);

    dispatch({ type, meta: id });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload, meta: id });
    } catch (e) {
      dispatch({ type: ERROR, error: true, payload: e, meta: id });
    }
  };
};

export const handleAsyncActionsById = (
  type: string,
  key: string,
  keepData = false
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state: any, action: any) => {
    const id = action.meta;
    console.log(state, key);

    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(
              keepData ? state[key][id] && state[key][id].data : null
            ),
          },
        };
      case SUCCESS: {
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload),
          },
        };
      }
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload),
          },
        };
      default:
        return state;
    }
  };
};
