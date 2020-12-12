/** @jsx jsx */
import { css, keyframes } from "@emotion/react";
import useTheme from "../../hooks/useTheme";
import { FontFamilies } from "../../style";

const themeColors = useTheme();
const colorChange = keyframes`
  0% { color: ${themeColors.white} }
  50% { color: #ff8fc7; }
  100% { color: ${themeColors.hotpink} }
`;
export const style = css`   
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
a.active {
  color: ${themeColors.hotpink};
}
`;
