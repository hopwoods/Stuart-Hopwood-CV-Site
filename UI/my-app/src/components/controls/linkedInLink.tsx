/** @jsx jsx */
//import React from "react";
import { jsx } from "@emotion/react";
import { FunctionComponent } from "react";
import { IconButton } from "@material-ui/core";
import { FaLinkedin } from "react-icons/fa";
import { SocialButtonLinkProps } from "../../types";

export const LinkedInLink: FunctionComponent<SocialButtonLinkProps> = ({
  color,
  size,
}) => {
  return (
    <IconButton
      aria-label="LinkedIn Profile (Stuart Hopwood)"
      color={color}
      size={size}
      href="https://www.linkedin.com/in/stuart-hopwood"
    >
      <FaLinkedin />
    </IconButton>
  );
};
