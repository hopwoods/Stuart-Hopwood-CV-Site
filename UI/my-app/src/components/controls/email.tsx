/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/react";
import { style } from "./email.css";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import { FunctionComponent } from "react";

export const Email: FunctionComponent = () => {
  return (
    <div className="email" css={style}>
      <AlternateEmailOutlinedIcon />
      <span>
        <a href="mailto:stoo.hopwood@gmail.com">stoo.hopwood@gmail.com</a>
      </span>
    </div>
  );
};
