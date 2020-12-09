/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";

export const Content: FunctionComponent = ({ children }) => {
  const style = css`
    grid-column: 1 / span 1;
    padding: 1em;
    display: grid;
    grid-template-columns: auto minmax(50px, 1fr);
    grid-template-rows: repeat(4, auto);
    grid-gap: 2em;
    height: fit-content;
  `;
  return <article css={style}>{children}</article>;
};
