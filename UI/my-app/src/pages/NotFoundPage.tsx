/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import "moment-timezone";
import { Banner, Navbar } from "../components/layout";
import { darth, grid, text } from "./NotFoundPage.css";
import darthImg from "../images/darthVader.png";

function NotFoundPage() {
  return (
    <React.Fragment>
      <Banner>
        <div css={grid}>
          <img src={darthImg} alt="Darth Vader" css={darth} />
          <span css={text}>I find your lack of navigation disturbing.</span>
        </div>
      </Banner>
      <Navbar />
    </React.Fragment>
  );
}

export default NotFoundPage;
