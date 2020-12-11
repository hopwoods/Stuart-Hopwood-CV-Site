/** @jsx jsx */
import { css, keyframes } from "@emotion/react";
import { FontFamilies, mediaQueries } from "../../style";
import useTheme from "../../hooks/useTheme";

const themeColors = useTheme();

const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}  
`;

const growDown = keyframes`
  0% {
      transform: scaleY(0)
  }
  80% {
      transform: scaleY(1.1)
  }
  100% {
      transform: scaleY(1)
  }
`;

export const style = css`
    grid-area: nav;
    background-color: ${themeColors.darkShades};
    color: ${themeColors.white};
    padding: 0.3em;
    height: fit-content;
    font-size: 1.1em;
    text-transform: uppercase;
    border-bottom: 0.3em solid ${themeColors.lightAccent};
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;

    &.scrolled {
      position: sticky;
      top: 0;
      left: 0;
      animation: ${growDown} 300ms ease-in-out;
      animation: ${fadeIn} 300ms ease-in-out;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: minmax(65px, 1fr);
      grid-gap: 0.25em;
      align-items: center;
      max-width: 40rem;
      justify-self: center;
    }

    ul li {
      grid-column-start: 1 / span 1;
      margin: 0.3em;
      display: inline-block;
    }
  
    ul li label {
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${FontFamilies.secondary}
    font-weight: 400;
    display: inline-block;
    margin-right: 0.4em;
    }

    @media ${mediaQueries.small} {
      ul {
        grid-template-columns: minmax(65px, 1fr);
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    @media ${mediaQueries.medium} {
      ul {
        grid-template-columns: repeat(5, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
        justify-items: center;
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    @media ${mediaQueries.large} {
      ul {
        grid-template-columns: repeat(5, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);        
        justify-items: center;
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    @media ${mediaQueries.xlarge} {
      font-size: 1em;
      ul {
        grid-template-columns: repeat(5, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
        justify-items: center;
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    @media ${mediaQueries.xxlarge} {
      font-size: 1em;
      ul {
        grid-template-columns: repeat(5, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
        justify-items: center;
      }

      ul li {
        grid-column-start: span 1;
      }
    }
  `;
