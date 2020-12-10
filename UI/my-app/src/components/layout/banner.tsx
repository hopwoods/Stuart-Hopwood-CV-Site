/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css, keyframes } from "@emotion/react";
import useTheme from "../../hooks/useTheme";
import { FontFamilies } from "../../style";

export const Banner: FunctionComponent = ({ children }) => {
  const themeColors = useTheme();

  const gradient = keyframes`
   0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }  
  `;
  const style = css`
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    padding: 1em;
    height: fit-content;
    color: ${themeColors.white};
    font-size: 2rem;
    justify-self: stretch;
    align-self: stretch;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    font-family: ${FontFamilies.secondary};
    font-weight: 100;
    background: linear-gradient(-45deg, #541545, #420f3c, #252934, #252934);
    background-size: 400% 400%;
    animation: ${gradient} 15s ease infinite;

    span.name {
      color: ${themeColors.hotpink};
      font-weight: 200;
    }
  `;
  return (
    <article css={style}>
      <p>
        Hello I'm <span className="name">Stuart Hopwood.</span>
        <br />
        I'm a full stack Web Developer.
      </p>
    </article>
  );
};
