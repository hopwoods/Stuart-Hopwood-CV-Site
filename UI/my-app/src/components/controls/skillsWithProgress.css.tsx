/** @jsx jsx */
import { css } from "@emotion/react";
import useTheme from "../../hooks/useTheme";

const themeColors = useTheme();

export const style = css`
  grid-column: 1 / span 1;
  justify-self: stretch;
  padding: 1em;
  display: grid;
  grid-template-columns: 5em auto 3em;
  grid-template-rows: auto;
  grid-gap: 0em;
  height: fit-content;
  align-items: center;
  padding: 0;
  margin: 0.3em 0;
`;

export const progressCircle = css`
  grid-column: 3 / span 1;
  justify-self: end;

  .MuiCircularProgress-colorPrimary {
    color: ${themeColors.hotpink};
  }

  .MuiCircularProgress-circle {
    stroke-linecap: round;
  }

  .MuiTypography-colorTextSecondary {
    color: ${themeColors.text};
    font-weight: 600;
  }
`;

export const progressBar = css`
  grid-column: 2 / span 1;
  justify-self: start;
  padding-right: 1em;
  width: 100%;

  .MuiLinearProgress-root {
    height: 7px;
    border-radius: 5px;
  }

  ,
  .MuiLinearProgress-colorPrimary {
    background-color: ${themeColors.Grey5};
  }

  ,
  .MuiLinearProgress-bar {
    border-radius: 5;
    background-color: ${themeColors.hotpink};
  }
`;

export const name = css`
  grid-column: 1 / span 1;
  justify-self: start;
`;
