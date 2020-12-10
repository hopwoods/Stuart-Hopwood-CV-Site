/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/react";

export const Content: FunctionComponent = ({ children }) => {
  const style = css`
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    padding: 1em;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
    grid-gap: 0em;
    height: fit-content;
  `;
  return <article css={style}>{children}</article>;
};
