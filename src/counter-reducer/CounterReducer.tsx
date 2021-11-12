import { useReducer } from "react";
import { counterState } from "./interfaces/interfaces";
import { counterReducerReducer } from "./state/counterReducer";

const INITIAL_STATE: counterState = {
  counter: 0,
  previous: 0,
  changes: 0,
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
