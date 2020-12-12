/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { style } from "./navBarLink.css";

export type LinkProps = {
  //Route to be used for the link
  to: string;

  //Value to displayed on screen
  value: string;

  //Is this a link to a component page or a hashlink (section on a page)?
  isHashLink: boolean;
};

export const NavBarLink: FunctionComponent<LinkProps> = ({
  to,
  value,
  isHashLink,
  ...props
}) => {
  return (
    <React.Fragment>
      <span css={style}>
        {isHashLink ? (
          <NavHashLink smooth to={to}>
            {value}
          </NavHashLink>
        ) : (
          <NavLink to={to}>{value}</NavLink>
        )}
      </span>
    </React.Fragment>
  );
};
