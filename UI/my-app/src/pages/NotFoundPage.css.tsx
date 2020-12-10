/** @jsx jsx */
import { css } from "@emotion/react";
import { mediaQueries } from "../style";

export const grid = css`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-columns: repeat(2, 0.75fr);
`;
export const darth = css`
  grid-column: 1 / span 2;
  justify-self: center;
  align-self: center;

  @media ${mediaQueries.small} {
    grid-column: 1 / span 2;
  }

  @media ${mediaQueries.medium} {
    grid-column: 1 / span 1;
  }

  @media ${mediaQueries.large} {
    grid-column: 1 / span 1;
  }

  @media ${mediaQueries.xlarge} {
    grid-column: 1 / span 1;
  }

  @media ${mediaQueries.xxlarge} {
    grid-column: 1 / span 1;
  }
`;
export const text = css`
  grid-column: 1 / span 2;
  justify-self: center;
  align-self: center;
  text-align: center;

  @media ${mediaQueries.small} {
    grid-column: 1 / span 2;
  }

  @media ${mediaQueries.medium} {
    grid-column: 2 / span 1;
  }

  @media ${mediaQueries.large} {
    grid-column: 2 / span 1;
    text-align: justify;
  }

  @media ${mediaQueries.xlarge} {
    grid-column: 2 / span 1;
    text-align: justify;
  }

  @media ${mediaQueries.xxlarge} {
    grid-column: 2 / span 1;
    text-align: justify;
  }
`;
