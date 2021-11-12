export type counterAction =
| { type: "increaseBy"; payload: { value: number } }
| { type: "reset" };
