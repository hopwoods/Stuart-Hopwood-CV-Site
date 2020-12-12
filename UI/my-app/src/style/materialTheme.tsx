import { createMuiTheme } from "@material-ui/core/styles";

export const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#7f7f7f",
    },
    contrastThreshold: 4,
    tonalOffset: 0.5,
  },
});
