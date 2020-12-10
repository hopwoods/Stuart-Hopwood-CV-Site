/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./container.css";

export const Container: FunctionComponent = ({ children }) => {
  return <div css={style}>{children}</div>;
};
