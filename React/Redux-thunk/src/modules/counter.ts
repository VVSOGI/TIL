// DUCKS Pattern

const INCREASE = "INCREASE" as const;
const DECREASE = "DECREASE" as const;

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsnyc = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsnyc = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

export type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>;
export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counter = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count + -1 };
    default:
      return state;
  }
};

export default counter;
