/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css, keyframes } from "@emotion/react";
import { FontFamilies } from "../../style";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

export type LinkProps = {
  //Route to be used for the link
  to: string;

  //Value to displayed on screen
  value: string;
};

export const NavBarLink: FunctionComponent<LinkProps> = ({
  to,
  value,
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
    animation: ${colorChange} 0.5s ease; 
    animation-fill-mode: forwards;
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
