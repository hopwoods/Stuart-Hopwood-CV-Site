/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/react";
import { FunctionComponent } from "react";
import { style } from "./About.css";
import { Profile } from "./profile";
import { Fade } from "react-reveal";
export const About: FunctionComponent = () => {
  return (
    <div id="about" css={style}>
      <Fade big>
        <h1>About</h1>
      </Fade>
      <Profile />
      <div id="skills">Skills Here</div>
    </div>
  );
};
