/** @jsx jsx */
import { css } from "@emotion/react";
import { mediaQueries } from "../../style/breakpoints";

export const style = css`
  grid-area: content;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 0em;
  min-height: 45.5vh;
  width: 50vw;
  justify-self: center;

  @media ${mediaQueries.xxlarge} {
    width: 70vw;
  }
  @media ${mediaQueries.xlarge} {
    width: 70vw;
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
