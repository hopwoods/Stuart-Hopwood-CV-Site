/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/react";
import { NavBarLink } from "../controls";
import { FontFamilies, mediaQueries } from "../../style";
import { getGradients } from "../../functions";
import useTheme from "../../hooks/useTheme";

export const Navbar: FunctionComponent = ({ children }) => {
  const gradients = getGradients();
  const themeColors = useTheme();
  const style = css`
    grid-column: 1 / span 1;
    background: ${gradients.gradient1};
    color: ${themeColors.text};
    padding: 0.3em;
    height: fit-content;
    font-size: 1em;
    text-transform: uppercase;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: minmax(325px, 1fr);
      grid-gap: 0em;
    }

    ul li {
      grid-column-start: 1 / span 1;
      justify-self: center;
      align-self: center;
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
      background: none;
      ul {
        grid-template-columns: repeat(12, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    @media ${mediaQueries.medium} {
      background: none;
      ul {
        grid-template-columns: repeat(14, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    @media ${mediaQueries.large} {
      background: none;
      ul {
        grid-template-columns: repeat(16, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    @media ${mediaQueries.xlarge} {
      font-size: 1em;
      background: none;
      ul {
        grid-template-columns: repeat(18, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    @media ${mediaQueries.xxlarge} {
      font-size: 1em;
      background: none;
      ul {
        grid-template-columns: repeat(20, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
      }
    }


  `;

  return (
    <nav css={style} id="NavBar">
      <ul role="menubar">
        <li>
          <NavBarLink to="/about" value="About" />
        </li>
      </ul>
    </nav>
  );
};
