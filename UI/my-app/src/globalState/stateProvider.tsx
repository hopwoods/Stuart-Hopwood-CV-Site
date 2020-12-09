import React, { FunctionComponent, useReducer } from "react";
import { AppContext, reducer, defaultState } from ".";

export const StateProvider: FunctionComponent = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, defaultState);
  return (
    <AppContext.Provider
      value={{ globalState, dispatch }}
      children={children}
    />
  );
};
