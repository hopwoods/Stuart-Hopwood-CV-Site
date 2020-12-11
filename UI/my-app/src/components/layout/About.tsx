/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/react";
import { style } from "./About.css";

export function About() {
  return (
    <div id="about" css={style}>
      <h1>About</h1>
      <div id="profile">Profile Here</div>
      <div id="skills">Skills Here</div>
    </div>
  );
}
