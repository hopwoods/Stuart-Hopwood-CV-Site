/** @jsx jsx */
import { css } from "@emotion/react";
import useTheme from "../../hooks/useTheme";

const themeColors = useTheme();

export const style = css`
  grid-colum: 1 / span 1;
  padding: 1em;
  display: grid;
  grid-template-columns: 1.5em auto;
  grid-template-rows: auto;
  grid-gap: 0em;
  height: fit-content;
  align-items: center;

  span {
    display: inline-block;
    margin-left: 0.4em;
  }

  span a {
    color: ${themeColors.text};
    text-decoration: none;
  }
`;
