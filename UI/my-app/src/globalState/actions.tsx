export enum ActionType {
  TOGGLE_DARKMODE = "Toggle Dark Mode",
}

export type Action = { type: ActionType.TOGGLE_DARKMODE; payload: boolean };

type ToggleDarkModeAction = {
  type: ActionType.TOGGLE_DARKMODE;
  payload: boolean;
};

const ToggleDarkMode = (value: boolean): ToggleDarkModeAction => ({
  type: ActionType.TOGGLE_DARKMODE,
  payload: value,
});

export const Actions = {
  ToggleDarkMode,
};
