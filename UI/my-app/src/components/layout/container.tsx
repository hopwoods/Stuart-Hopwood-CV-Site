/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/react";
import { FontFamilies, mediaQueries } from "../../style";
import { getGradients } from "../../functions";
import useTheme from "../../hooks/useTheme";

export const Container: FunctionComponent = ({ children }) => {
  const gradients = getGradients();
  const themeColors = useTheme();
  const style = css`
  font-family: ${FontFamilies.primary}
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${themeColors.text};
  background-color: ${themeColors.white};  
  display: grid;
  grid-template-columns: minmax(50px, 1fr);
  grid-template-rows:
    1fr
    3rem
    1fr
    minmax(20px, 0.1fr);
  grid-gap: 0em;
  height: 100%;
  min-height: 100vh;
  line-height: 1.5;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${FontFamilies.secondary};
    font-weight: 100;
    color: ${themeColors.black};
    line-height: 1.25;    
  }

  font-size: 1rem;

  @media ${mediaQueries.small} {
    font-size: 1rem;
  }

  @media ${mediaQueries.medium} {
    font-size: 1rem;
  }

  @media ${mediaQueries.large} {
    font-size: 1.1rem;
  }

  @media ${mediaQueries.xlarge} {
    font-size: 1.3rem;
  }

  @media ${mediaQueries.xxlarge} {
    font-size: 1.5rem;
  }
`;
  return <div css={style}>{children}</div>;
};
