/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css, keyframes } from "@emotion/react";
import { FontFamilies } from "../../style";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useTheme from "../../hooks/useTheme";

export type LinkProps = {
  //Route to be used for the link
  to: string;

  //Value to displayed on screen
  value: string;

  //Is this a link to a component page or a hashlink (section on a page)?
  isHashLink: boolean;
};

export const NavBarLink: FunctionComponent<LinkProps> = ({
  to,
  value,
  isHashLink,
  ...props
}) => {
  const themeColors = useTheme();
  const colorChange = keyframes`
    0% { color: ${themeColors.white} }
    50% { color: #ff8fc7; }
    100% { color: ${themeColors.hotpink} }
`;
  const style = css`   
    display:block;
    margin-left: 0.5em; 
    margin-right: 0.5em;
    text-align: center; 
  
  a {
    position: relative;
    color: ${themeColors.white};
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${FontFamilies.secondary}
    font-weight: 300;     
  }
  a:hover {
    animation: ${colorChange} 0.75s; 
    animation-fill-mode: forwards;
  }

`;

  return (
    <React.Fragment>
      <span css={style}>
        {isHashLink ? (
          <HashLink smooth to={to}>
            {value}
          </HashLink>
        ) : (
          <NavLink to={to}>{value}</NavLink>
        )}
      </span>
    </React.Fragment>
  );
};
