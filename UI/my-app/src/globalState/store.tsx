import React, { useContext } from "react";
import { Action } from "../globalState";

export interface StateContext {
  darkMode: boolean;
}

export interface Store {
  globalState: StateContext;
  dispatch: React.Dispatch<Action>;
}

export const defaultState: StateContext = {
  darkMode: true,
};

export const AppContext = React.createContext<Store>({
  globalState: defaultState,
  dispatch: () => null,
});

export const useStateContext = () => useContext(AppContext);
