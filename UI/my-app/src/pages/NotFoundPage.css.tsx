/** @jsx jsx */
import { css } from "@emotion/react";
import { FontFamilies, mediaQueries } from "../style";

export const grid = css`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-columns: repeat(2, 0.75fr);
  grid-template-rows: 0.3fr 0.3fr auto;
  grid-gap: 1em;
`;
export const darth = css`
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
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
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  justify-self: center;
  align-self: start;
  text-align: center;

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

export const subText = css`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  justify-self: center;
  align-self: start;
  text-align: center;
  font-size: 0.8em;

  font-family: ${FontFamilies.primary} @media ${mediaQueries.small} {
    grid-column: 1 / span 2;
  }

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

export const mouseIcon = css`
  grid-column: 1 / span 2;
  grid-row: 3 / span 1;
  justify-self: center;
  align-self: start;
  text-align: center;
  font-size: 0.8em;
  position: relative;

  font-family: ${FontFamilies.primary} @media ${mediaQueries.small} {
    grid-column: 1 / span 2;
  }

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
