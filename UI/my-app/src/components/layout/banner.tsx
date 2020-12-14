/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./banner.css";

type BannerProps = {
  id: string;
  fullscreen: boolean;
};

export const Banner: FunctionComponent<BannerProps> = ({
  id,
  fullscreen,
  children,
}) => {
  return (
    <article
      id={id}
      css={style}
      className={`${fullscreen ? "fullscreen" : ""}`}
    >
      {children}
    </article>
  );
};
