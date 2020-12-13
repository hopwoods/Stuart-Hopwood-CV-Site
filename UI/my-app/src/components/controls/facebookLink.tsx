/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/react";
import { FunctionComponent } from "react";
import { IconButton } from "@material-ui/core";
import { FaFacebook } from "react-icons/fa";
import { SocialButtonLinkProps } from "../../types";

export const FacebookLink: FunctionComponent<SocialButtonLinkProps> = ({
  color,
  size,
}) => {
  return (
    <IconButton
      aria-label="Facebook Profile (Stuart Hopwood)"
      color={color}
      size={size}
      href="https://www.facebook.com/stoo.hopwood"
    >
      <FaFacebook />
    </IconButton>
  );
};
