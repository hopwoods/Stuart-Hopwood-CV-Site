/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { NavBarLink, ToggleSwitch } from "../controls";
import { useStateContext, Actions } from "../../globalState";
import { FontFamilies, mediaQueries } from "../../style";
import { getGradients } from "../../functions";
import useTheme from "../../Hooks/useTheme";
import { Logo } from ".";

export const Navbar: FunctionComponent = ({ children }) => {
  const { globalState: state, dispatch } = useStateContext();
  const { darkMode } = state;

  const gradients = getGradients(darkMode);
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
    ul li.logo {
      grid-column-start: 1 / span 1;
      text-align: left;
      align-self: stretch;
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
      ul li.logo {
        grid-column: 1 / span 3;
        text-align: left;
        justify-self: start;
      }
      ul li.dark-mode-toggle {
        grid-column: 8 / span 3;
        justify-self: stretch;
        text-align: right;
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
      ul li.logo {
        grid-column: 1 / span 3;
        justify-self: start;
      }
      ul li.dark-mode-toggle {
        grid-column: 10 / span 3;
        justify-self: stretch;
        text-align: right;
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
      ul li.logo {
        grid-column: 1 / span 3;
        justify-self: start;
      }
      ul li.dark-mode-toggle {
        grid-column: 19 / span 3;
        justify-self: stretch;
        text-align: right;
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
      ul li.logo {
        grid-column: 1 / span 3;
        justify-self: start;
      }
      ul li.dark-mode-toggle {
        grid-column: 19 / span 2;
        justify-self: stretch;
        text-align: right;
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
      ul li.logo {
        grid-column: 1 / span 2;
        justify-self: start;
      }
      ul li.dark-mode-toggle {
        grid-column: 19 / span 2;
        justify-self: stretch;
        text-align: right;
      }
    }


  `;

  const toggleDarkMode = (value: boolean) => {
    dispatch(Actions.ToggleDarkMode(value));
  };

  return (
    <nav css={style} id="NavBar">
      <ul role="menubar">
        <li className="logo">
          <Logo />
        </li>
        <li>
          <NavBarLink to="/" value="Home" />
        </li>
        <li>
          <NavBarLink to="/about" value="About Me" />
        </li>
        <li className="dark-mode-toggle">
          <label>Dark Mode?</label>
          <ToggleSwitch
            id="toggle-dark-mode"
            name="toggle-dark-mode"
            checked={darkMode ? true : false}
            optionLabels={["Yes", "No"]}
            small={true}
            disabled={false}
            onChange={() => toggleDarkMode(!darkMode)}
          />
        </li>
      </ul>
    </nav>
  );
};
