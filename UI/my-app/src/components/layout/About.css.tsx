/** @jsx jsx */
import { css } from "@emotion/react";
import { mediaQueries } from "../../style";

export const style = css`
  grid-column: 1 / span 2;
  margin: 0;
  padding-top: 7em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  height: 100vh;
  width: 50vw;
  place-self: start center;

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

  @media ${mediaQueries.xxlarge} {
    width: 50vw;
  }
  @media ${mediaQueries.xlarge} {
    width: 50vw;
  }
  @media ${mediaQueries.large} {
    width: 60vw;
  }
  @media ${mediaQueries.medium} {
    width: 97vw;
  }
  @media ${mediaQueries.small} {
    width: 97vw;
  }
`;
