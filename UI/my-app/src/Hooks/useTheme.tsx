import { useStateContext } from "../GlobalState";

export interface IThemeColors {
  text: string;
  textInverse: string;
  primary: string;
  primaryShades: string;
  lightShades: string;
  lightAccent: string;
  darkShades: string;
  darkAccent: string;
  bodyBackground: string;
  Grey1: string;
  Grey2: string;
  Grey3: string;
  Grey4: string;
  Grey5: string;
  Grey6: string;
  Grey7: string;
  labelColour: string;
  disabledColour: string;
  toggleColour: string;
  white: string;
  green: string;
  red: string;
  sideBarGrey: string;
  tableBackground: string;
  danger: string;
  warning: string;
  info: string;
}

const DarkTheme: IThemeColors = {
  text: "#E4E4E4",
  textInverse: "#3e3e3e",
  primary: "#B55C53",
  primaryShades: "#a74c43",
  lightShades: "#F3F7FA",
  lightAccent: "#E07851",
  darkShades: "#3E4148",
  darkAccent: "#AF9EA8",
  bodyBackground: "rgb(20, 20, 24)",
  Grey1: "#101010",
  Grey2: "#252525",
  Grey3: "#3f3f3f",
  Grey4: "#404040",
  Grey5: "#555555",
  Grey6: "#6f6f6f",
  Grey7: "#707070",
  labelColour: "#bbb",
  disabledColour: "#ddd",
  toggleColour: "#2F855A",
  white: "#fff",
  green: "#387D4D",
  red: "#D20008",
  sideBarGrey: "rgba(75, 75, 75, 0.5)",
  tableBackground: "rgba(48, 48, 48, 0.5)",
  danger: "#9c0000",
  warning: "#f0a800",
  info: "#00acf0",
};

const LightTheme: IThemeColors = {
  text: "#2e2e2e",
  textInverse: "#1e1e1e",
  primary: "#B55C53",
  primaryShades: "#a74c43",
  lightShades: "#F3F7FA",
  lightAccent: "#AFB1B0",
  darkShades: "#C3C3C3",
  darkAccent: "#A99A83",
  bodyBackground: "#FEFEFE",
  Grey1: "#909090",
  Grey2: "#a5a5a5",
  Grey3: "#bfbfbf",
  Grey4: "#c0c0c0",
  Grey5: "#d5d5d5",
  Grey6: "#efefef",
  Grey7: "#f0f0f0",
  labelColour: "#bbb",
  disabledColour: "#ddd",
  toggleColour: "#2F855A",
  white: "#fff",
  green: "#387D4D",
  red: "#D20008",
  sideBarGrey: "rgba(220, 220, 220, 0.3)",
  tableBackground: "rgba(255, 255, 255, 0.5)",
  danger: "#9c0000",
  warning: "#f0a800",
  info: "#00acf0",
};

export default function useTheme(): IThemeColors {
  const { globalState: state } = useStateContext();
  const { darkMode } = state;

  const theme = darkMode ? DarkTheme : LightTheme;

  return theme;
}
