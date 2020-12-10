/** @jsx jsx */
import { css, keyframes } from "@emotion/react";

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
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 15rem;
  transform: translateX(-50%);
  opacity: 0.75;
  overflow: visible;

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
