/** @jsx jsx */
import { jsx } from "@emotion/react";
import { style } from "./socialIcons.css";
import { FunctionComponent } from "react";
import {
  FacebookLink,
  GithubLink,
  InstagramLink,
  LinkedInLink,
} from "../controls";

export const SocialIcons: FunctionComponent = () => {
  return (
    <div className="socialIcons" css={style}>
      <FacebookLink color="primary" size="medium" />
      <GithubLink color="primary" size="medium" />
      <LinkedInLink color="primary" size="medium" />
      <InstagramLink color="primary" size="medium" />
    </div>
  );
};
