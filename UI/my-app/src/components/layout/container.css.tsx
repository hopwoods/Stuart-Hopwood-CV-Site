/** @jsx jsx */
import { css } from "@emotion/react";
import { FontFamilies, mediaQueries } from "../../style";
import useTheme from "../../hooks/useTheme";

const themeColors = useTheme();
export const style = css`
  font-family: ${FontFamilies.primary}
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${themeColors.text};
  background-color: ${themeColors.white};  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "banner"
    "nav"
    "content"
    "footer";
  grid-gap: 0em;
  height: fit-content;
  line-height: 1.5;
  font-size: 1rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${FontFamilies.secondary};
    font-weight: 300;
    color: ${themeColors.text};
    line-height: 1.25;    
  }

  h1 {
    font-weight: 500;
    border-bottom: solid 3px;
    padding-bottom: 0.15em;
    text-transform: uppercase;
  }

  h1.inverse,
  h2.inverse,
  h3.inverse,
  h4.inverse,
  h5.inverse,
  h6.inverse {
    color: ${themeColors.white};  
  }

  @media ${mediaQueries.xxlarge} {
    font-size: 1.3rem;
  }  
  @media ${mediaQueries.xlarge} {
    font-size: 1rem;
  }
  @media ${mediaQueries.large} {
    font-size: 1rem;
  }
  @media ${mediaQueries.medium} {
    font-size: 1rem;
  }
  @media ${mediaQueries.small} {
    font-size: 1rem;
  }


`;
