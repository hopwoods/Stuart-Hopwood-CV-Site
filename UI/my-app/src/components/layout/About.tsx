/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/react";
import { style } from "./About.css";
import { Profile } from "./profile";

export function About() {
  return (
    <div id="about" css={style}>
      <h1>About</h1>
      <Profile />
      <div id="skills">Skills Here</div>
    </div>
  );
}
