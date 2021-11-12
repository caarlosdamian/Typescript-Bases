import { useReducer } from "react";

interface counterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: counterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type counterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducerReducer = (
  state: counterState,
  action: counterAction
): counterState => {
  switch (action.type) {
    case "increaseBy":
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
        previous: state.counter,
      };
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    default:
      return state;
  }
};
export const CounterReducer = () => {
  const [{ counter }, dispatch] = useReducer(
    counterReducerReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };
  return (
    <>
      <h1>CounterReducer: {counter}</h1>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(10)}>+10</button>
    </>
  );
};
