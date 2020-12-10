/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css, keyframes } from "@emotion/react";
import useTheme from "../../hooks/useTheme";
import { FontFamilies } from "../../style";

export const Banner: FunctionComponent = ({ children }) => {
  const themeColors = useTheme();

  const colorChange = keyframes`
    0% { color: #ff0034; }
    10% { color: #3e0010; }
    20% { color: #000000; }
    30% { color: #3e0010; }
    40% { color: #b90030; }

    50% { color: #ff0034; }

    60% { color: #b90030; }
    70% { color: #3e0010; }
    80% { color: #000000; }
    90% { color: #3e0010; }
    100% { color: #ff0034; }
  `;

  const gradient = keyframes`
  0% {
		background-position: 0% 25%;
	}
  25% {
		background-position: 50% 50%;
	}
	50% {
		background-position: 100% 50%;
  }
  75% {
		background-position: 50% 50%;
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
    background: linear-gradient(
      45deg,
      rgba(37, 41, 52, 1) 0%,
      rgba(92, 17, 73, 1) 11%,
      rgba(221, 0, 63, 1) 40%,
      rgba(221, 0, 63, 1) 46%,
      rgba(167, 24, 104, 1) 65%,
      rgba(108, 15, 89, 1) 86%,
      rgba(37, 41, 52, 1) 100%
    );
    background-size: 400% 400%;
    animation: ${gradient} 15s ease infinite;

    span.name {
      animation: ${colorChange} 15s infinite;
      font-weight: 400;
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.75);
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
