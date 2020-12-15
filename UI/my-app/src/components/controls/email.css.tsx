/** @jsx jsx */
import { css } from "@emotion/react";
import useTheme from "../../hooks/useTheme";

const themeColors = useTheme();

export const style = css`
  grid-colum: 1 / span 1;
  justify-self: stretch;
  padding: 1em;
  display: grid;
  grid-template-columns: 1.5em auto;
  grid-template-rows: auto;
  grid-gap: 0em;
  height: fit-content;
  align-items: center;
  padding: 0;
  margin: 0.3em 0;

  span {
    display: inline-block;
    margin-left: 0.4em;
  }

  span a {
    color: ${themeColors.darkAccent};
    text-decoration: none;

    &:hover {
      color: ${themeColors.hotpink};
    }
  }
`;
