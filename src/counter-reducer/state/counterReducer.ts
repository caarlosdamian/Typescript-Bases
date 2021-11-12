import { counterAction } from "../actions/actions";
import { counterState } from "../interfaces/interfaces";

export const counterReducerReducer = (
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
