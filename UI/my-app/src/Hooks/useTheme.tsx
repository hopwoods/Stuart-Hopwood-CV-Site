export type ThemeColors = {
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
  tableBackground: string;
  danger: string;
  warning: string;
  info: string;
  black: string;
  hotpink: string;
};

const theme: ThemeColors = {
  text: "#2e2e2e",
  textInverse: "#1e1e1e",
  primary: "#B55C53",
  primaryShades: "#a74c43",
  lightShades: "#F3F7FA",
  lightAccent: "#B40542",
  darkShades: "#252934",
  darkAccent: "#910035",
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
  tableBackground: "rgba(255, 255, 255, 0.5)",
  danger: "#9c0000",
  warning: "#f0a800",
  info: "#00acf0",
  black: "#000000",
  hotpink: "#FD0151",
};

export default function useTheme(): ThemeColors {
  return theme;
}
