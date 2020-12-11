/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import "moment-timezone";
import { Banner, Navbar } from "../components/layout";
import { darth, grid, subText, text } from "./NotFoundPage.css";
import darthImg from "../images/darthVader.png";

function NotFoundPage() {
  return (
    <React.Fragment>
      <Banner id="404">
        <div css={grid}>
          <img src={darthImg} alt="Darth Vader" css={darth} />
          <span css={text}>I find your lack of navigation disturbing.</span>
          <span css={subText}>
            The page you are looking for does not exist.
          </span>
        </div>
      </Banner>
      <Navbar />
    </React.Fragment>
  );
}

export default NotFoundPage;
