/** @jsx jsx */
import { css } from "@emotion/react";

export const style = css`
  grid-colum: 1 / span 1;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(4, 4em);
  grid-template-rows: auto;
  grid-gap: 0em;
  height: fit-content;
  padding: 0;
  margin: 0.3em 0;
  align-items: center;
  justify-items: center;
  grid-auto-flow: dense;
`;
