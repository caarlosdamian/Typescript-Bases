export type counterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

export const doReset = (): counterAction => ({
  type: "reset",
});

export const doIncreceBy = (value: number): counterAction => ({
  type: "increaseBy",
  payload: { value },
});
