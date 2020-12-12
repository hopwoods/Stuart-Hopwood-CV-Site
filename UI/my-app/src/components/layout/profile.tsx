/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./profile.css";
import { PhoneNumber } from "./phoneNumber";

export const Profile: FunctionComponent = () => {
  return (
    <div css={style}>
      <div>Profile Pic Here</div>
      <PhoneNumber />
      <div>Email Here</div>
      <div>Location Here</div>
      <div>Social Links Here</div>
    </div>
  );
};
