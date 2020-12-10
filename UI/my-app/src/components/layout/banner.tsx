/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./banner.css";

export const Banner: FunctionComponent = ({ children }) => {
  return <article css={style}>{children}</article>;
};
