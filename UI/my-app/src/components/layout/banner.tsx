/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./banner.css";

type BannerProps = {
  id: string;
};

export const Banner: FunctionComponent<BannerProps> = ({ id, children }) => {
  return (
    <article id={id} css={style}>
      {children}
    </article>
  );
};
