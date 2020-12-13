/** @jsx jsx */
import { jsx } from "@emotion/react";
import { style } from "./location.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { FunctionComponent } from "react";

export const Location: FunctionComponent = () => {
  return (
    <div className="location" css={style}>
      <LocationOnIcon />
      <span>Exeter, United Kingdom</span>
    </div>
  );
};
