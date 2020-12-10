/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/react";
import { NavBarLink } from "../controls";
import { FontFamilies, mediaQueries } from "../../style";
import { getGradients } from "../../functions";
import useTheme from "../../hooks/useTheme";
import { Logo } from ".";

export const Navbar: FunctionComponent = ({ children }) => {
  const gradients = getGradients();
  const themeColors = useTheme();
  const style = css`
    grid-column: 1 / span 1;
    color: ${themeColors.text};
    padding: 0.3em;
    height: fit-content;
    font-size: 1.8em;
    text-transform: uppercase;
    display: grid;
      grid-template-columns: minmax(325px, 1fr);
      grid-template-rows: 6.5rem 4rem;
      grid-gap: 0em;

    div.JobTitle {
      grid-column-start: 2 / span 1;      
      background: ${gradients.textGradient};
      height: 100%;
      width: 100%;
      text-align: center;
      color: ${themeColors.white};
      font-weight: 100;
      text-transform: Capitalize;
    }

    ul {
      grid-column-start: 1 / span 1;
      grid-row-start: 1 / span 1;
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
    ul li.logo {
      grid-column-start: 1 / span 1;
      text-align: center;
      align-self: center;
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
        grid-template-columns: repeat(1, minmax(65px, 1fr));
      }

      ul li {
        grid-column-start: span 1;
      }
      ul li.logo {
        grid-column: 1 / span 1;
      }
    }

    @media ${mediaQueries.medium} {
      background: none;
      ul {
        grid-template-columns: repeat(1, minmax(65px, 1fr));
      }

      ul li {
        grid-column-start: span 1;
      }
      ul li.logo {
        grid-column: 1 / span 1;
      }
    }

    @media ${mediaQueries.large} {
      background: none;
      ul {
        grid-template-columns: repeat(1, minmax(65px, 1fr));
      }

      ul li {
        grid-column-start: span 1;
      }
      ul li.logo {
        grid-column: 1 / span 1;
      }
    }

    @media ${mediaQueries.xlarge} {
      font-size: 1.8em;
      background: none;
      ul {
        grid-template-columns: repeat(1, minmax(65px, 1fr));
      }

      ul li {
        grid-column-start: span 1;
      }
      ul li.logo {
        grid-column: 1 / span 1;
      }
    }

    @media ${mediaQueries.xxlarge} {
      font-size: 1.8em;
      background: none;
      ul {
        grid-template-columns: repeat(1, minmax(65px, 1fr));
      }

      ul li {
        grid-column-start: span 1;
      }
      ul li.logo {
        grid-column: 1 / span 1;
      }
    }


  `;

  return (
    <nav css={style} id="NavBar">
      <ul role="menubar">
        <li className="logo">
          <Logo />
        </li>
      </ul>
      <div className="JobTitle">Software Developer</div>
    </nav>
  );
};
