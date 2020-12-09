/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "../layout/node_modules/@emotion/core";
import { FontFamilies } from "../../style";
import { getGradients } from "../../functions";
import { useStateContext } from "../../globalState";
import { Link } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";

export interface LinkProps {
  //Route to be used for the link
  to: string;

  //Value to displayed on screen
  value: string;
}

export const NavBarLink: FunctionComponent<LinkProps> = ({
  to,
  value,
  ...props
}) => {
  const { globalState: state } = useStateContext();
  const { darkMode } = state;

  const gradients = getGradients(darkMode);

  const themeColors = useTheme();
  const style = css`  
  a {
    position: relative;
    color: ${themeColors.text};
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${FontFamilies.secondary}
    font-weight: 400;
  }
  a::before {
    content: "";
    position: absolute;
    height: 3px;
    right: 0px;
    bottom: -3px;
    left: 0px;
    background-color: none;
  }
  a:hover {
    color: ${themeColors.text};
  }
  a:hover::before {
    background: ${gradients.textGradient};
  }
`;

  return (
    <React.Fragment>
      <span css={style}>
        <Link to={to}>{value}</Link>
      </span>
    </React.Fragment>
  );
};
