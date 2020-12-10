import { StateContext } from ".";
import { Action, ActionType } from ".";

export const reducer = (state: StateContext, action: Action) => {
  switch (action.type) {
    case ActionType.TOGGLE_DARKMODE:
      return { ...state, darkMode: action.payload };

    default:
      throw new Error("Not among actions");
  }
};
