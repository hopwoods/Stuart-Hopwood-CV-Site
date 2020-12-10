/** @jsx jsx */
import { css, keyframes } from "@emotion/react";
import useTheme from "../../hooks/useTheme";
import { FontFamilies } from "../../style";

const themeColors = useTheme();

export const colorChange = keyframes`
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

export const gradient = keyframes`
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

export const wobble = keyframes`    
33% {
  transform: translateX(-50px);
}

66% {
  transform: translateX(50px);
}
`;

export const up = keyframes`
0% {
  opacity: 0;
}    
10%, 90% {
  opacity: 1;
}    
100% {
  opacity: 0;
  transform: translateY(-1024px);
}    
`;

export const style = css`
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
  grid-template-rows: repeat(2, 0.5fr);
  grid-row-gap: 3em;
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
  animation: ${gradient} 15s ease-out infinite;

  p {
    align-self: end;
  }

  span.name {
    animation: ${colorChange} 15s infinite;
    font-weight: 400;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.75);
  }

  button.about {
    align-self: start;
    display: block;
    margin: 1em;
  }

  .bubbles-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    max-width: 15rem;
    transform: translateX(-50%);
    opacity: 0.75;
    overflow: visible;
  }

  .bubbles {
    width: 100%;
    height: auto;
  }
  .bubbles circle {
    stroke: white;
    fill: none;
  }

  .bubbles > g > g:nth-of-type(3n) circle {
    stroke: #ff0034;
  }

  .bubbles > g > g:nth-of-type(4n) circle {
    stroke: #ff0034;
  }

  .bubbles-large {
    overflow: visible;
  }
  .bubbles-large > g {
    transform: translateY(2048px);
    opacity: 0;
    will-change: transform, opacity;
  }

  .bubbles-large g:nth-of-type(1) {
    animation: ${up} 6.5s infinite;
  }
  .bubbles-large g:nth-of-type(1) g {
    transform: translateX(350px);
  }
  .bubbles-large g:nth-of-type(1) circle {
    animation: ${wobble} 3s infinite ease-in-out;
  }

  .bubbles-large g:nth-of-type(2) {
    animation: ${up} 5.25s 250ms infinite;
  }
  .bubbles-large g:nth-of-type(2) g {
    transform: translateX(450px);
  }
  .bubbles-large g:nth-of-type(2) circle {
    animation: ${wobble} 3s infinite ease-in-out;
  }

  .bubbles-large g:nth-of-type(3) {
    animation: ${up} 6s 750ms infinite;
  }
  .bubbles-large g:nth-of-type(3) g {
    transform: translateX(700px);
  }
  .bubbles-large g:nth-of-type(3) circle {
    animation: ${wobble} 3s infinite ease-in-out;
  }

  .bubbles-large g:nth-of-type(4) {
    animation: ${up} 5.5s 1.5s infinite;
  }
  .bubbles-large g:nth-of-type(4) g {
    transform: translateX(500px);
  }
  .bubbles-large g:nth-of-type(4) circle {
    animation: ${wobble} 3s infinite ease-in-out;
  }

  .bubbles-large g:nth-of-type(5) {
    animation: ${up} 6.5s 4s infinite;
  }
  .bubbles-large g:nth-of-type(5) g {
    transform: translateX(675px);
  }
  .bubbles-large g:nth-of-type(5) circle {
    animation: ${wobble} 3s infinite ease-in-out;
  }

  .bubbles-small {
    overflow: visible;
  }
  .bubbles-small > g {
    transform: translateY(2048px);
    opacity: 0;
    will-change: transform, opacity;
  }
  .bubbles-small g circle {
    transform: scale(0);
  }

  .bubbles-small g:nth-of-type(1) {
    animation: ${up} 5.25s infinite;
  }
  .bubbles-small g:nth-of-type(1) g {
    transform: translateX(350px);
  }
  .bubbles-small g:nth-of-type(1) circle {
    animation: ${wobble} 3s infinite ease-in-out;
  }

  .bubbles-small g:nth-of-type(2) {
    animation: ${up} 5.75s infinite;
  }
  .bubbles-small g:nth-of-type(2) g {
    transform: translateX(750px);
  }
  .bubbles-small g:nth-of-type(2) circle {
    animation: ${wobble} 3s infinite ease-in-out;
  }

  .bubbles-small g:nth-of-type(3) {
    animation: ${up} 5.25s 250ms infinite;
  }
  .bubbles-small g:nth-of-type(3) g {
    transform: translateX(350px);
  }
  .bubbles-small g:nth-of-type(3) circle {
    animation: ${wobble} 3s 250ms infinite ease-in-out;
  }

  .bubbles-small g:nth-of-type(4) {
    animation: ${up} 5.75s 325ms infinite;
  }
  .bubbles-small g:nth-of-type(4) g {
    transform: translateX(180px);
  }
  .bubbles-small g:nth-of-type(4) circle {
    animation: ${wobble} 3s 325ms infinite ease-in-out;
  }

  .bubbles-small g:nth-of-type(5) {
    animation: ${up} 6s 125ms infinite;
  }
  .bubbles-small g:nth-of-type(5) g {
    transform: translateX(350px);
  }
  .bubbles-small g:nth-of-type(5) circle {
    animation: ${wobble} 3s 250ms infinite ease-in-out;
  }

  .bubbles-small g:nth-of-type(6) {
    animation: ${up} 5.13s 250ms infinite;
  }
  .bubbles-small g:nth-of-type(6) g {
    transform: translateX(650px);
  }
  .bubbles-small g:nth-of-type(6) circle {
    animation: ${wobble} 3s 125ms infinite ease-in-out;
  }

  .bubbles-small g:nth-of-type(7) {
    animation: ${up} 6.25s 350ms infinite;
  }
  .bubbles-small g:nth-of-type(7) g {
    transform: translateX(480px);
  }
  .bubbles-small g:nth-of-type(7) circle {
    animation: ${wobble} 3s 325ms infinite ease-in-out;
  }

  .bubbles-small g:nth-of-type(8) {
    animation: ${up} 7s 200ms infinite;
  }
  .bubbles-small g:nth-of-type(8) g {
    transform: translateX(330px);
  }
  .bubbles-small g:nth-of-type(8) circle {
    animation: ${wobble} 3s 325ms infinite ease-in-out;
  }

  .bubbles-small g:nth-of-type(9) {
    animation: ${up} 6.25s 233ms infinite;
  }
  .bubbles-small g:nth-of-type(9) g {
    transform: translateX(230px);
  }
  .bubbles-small g:nth-of-type(9) circle {
    animation: ${wobble} 3s 275ms infinite ease-in-out;
  }

  .bubbles-small g:nth-of-type(10) {
    animation: ${up} 6s 900ms infinite;
  }
  .bubbles-small g:nth-of-type(10) g {
    transform: translateX(730px);
  }

  .bubbles-small g:nth-of-type(10) circle {
    animation: ${wobble} 2s 905ms infinite ease-in-out;
  }
`;
