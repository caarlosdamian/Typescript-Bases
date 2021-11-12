import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counterElement, handleClick, counter } = useCounter(15);

  return (
    <>
      <h1>CounterEffectHook:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
