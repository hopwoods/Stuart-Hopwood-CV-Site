/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./phoneNumber.css";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";

export const PhoneNumber: FunctionComponent = () => {
  return (
    <div className="phoneNumber" css={style}>
      <PhoneAndroidOutlinedIcon />
      <span>
        <a href="tel:+447713047840">+44 07713 047840</a>
      </span>
    </div>
  );
};
