/** @jsx jsx */
//import React from "react";
import { jsx, css } from "@emotion/react";

function App() {
  const style = css`
    grid-column: 1 / span 2;
  `;
  return (
    <div css={style}>
      <h2>About Me</h2>
      <p>Hi I'm Stuart Hopwood and I am a Developer</p>
    </div>
  );
}

export default App;
