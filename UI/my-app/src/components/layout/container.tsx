/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { FontFamilies, mediaQueries } from "../../style";
import { getGradients } from "../../functions";
import { useStateContext } from "../../globalState";
import useTheme from "../../Hooks/useTheme";

export const Container: FunctionComponent = ({ children }) => {
  const { globalState: state } = useStateContext();
  const { darkMode } = state;
  const gradients = getGradients(darkMode);

  const themeColors = useTheme();
  const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

  font-family: ${FontFamilies.primary}
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${themeColors.text};
  background-color: ${gradients.gradient2};  
  display: grid;
  grid-template-columns: minmax(50px, 1fr);
  grid-template-rows:
    minmax(5rem, 0.1fr)
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
    font-weight: 700;
      background: ${gradients.textGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.25;
    
  }
  font-size: 0.9rem;

  @media ${mediaQueries.small} {
    font-size: 0.9rem;
  }

  @media ${mediaQueries.medium} {
    font-size: 0.9rem;
  }

  @media ${mediaQueries.large} {
    font-size: 1rem;
  }

  @media ${mediaQueries.xlarge} {
    font-size: 1.2rem;
  }

  @media ${mediaQueries.xxlarge} {
    font-size: 1.4rem;
  }
`;
  return <div css={style}>{children}</div>;
};
