/** @jsx jsx */
import { css } from "@emotion/react";
import useTheme from "../hooks/useTheme";

const themeColors = useTheme();
export const style = css`
  grid-column: 1 / span 1;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 0em;
  height: fit-content;
  width: fit-content;
  justify-self: center;
  justify-items: center;
  align-items: start;

  a {
    color: ${themeColors.darkAccent};
    text-decoration: none;

    &:hover {
      color: ${themeColors.hotpink};
    }
  }
`;

export const content = css``;
