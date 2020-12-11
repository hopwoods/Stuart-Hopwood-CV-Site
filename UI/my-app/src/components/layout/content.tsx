/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./content.css";

export const Content: FunctionComponent = ({ children }) => {
  return <article css={style}>{children}</article>;
};
