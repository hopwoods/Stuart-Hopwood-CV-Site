/** @jsx jsx */
import { css } from "@emotion/react";

export const style = css`
  grid-column: 1 / span 2;
  padding: 3em;
  padding-top: 7em;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;

  h1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    align-self: center;
    justify-self: center;
  }

  div#profile {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }

  div#skills {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }
`;
