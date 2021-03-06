/** @jsx jsx */
import { FunctionComponent, useCallback } from "react";
import { jsx } from "@emotion/react";
import { NavBarLink } from "../controls";
import { style } from "./navbar.css";
import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export const Navbar: FunctionComponent = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const size = useWindowSize();

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > size.height + 85) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [size.height]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  let navBarScrolledStateClass;
  if (scrolled) {
    navBarScrolledStateClass = "scrolled";
  } else {
    navBarScrolledStateClass = "";
  }

  return (
    <nav css={style} id="NavBar" className={navBarScrolledStateClass}>
      <ul role="menubar">
        <li>
          <NavBarLink isHashLink={true} to="/#home" value="Home" />
        </li>
        <li>
          <NavBarLink isHashLink={true} to="/#about" value="About" />
        </li>
        <li>
          <NavBarLink isHashLink={false} to="/experience" value="Experience" />
        </li>
        <li>
          <NavBarLink isHashLink={false} to="/education" value="Education" />
        </li>
        <li>
          <NavBarLink isHashLink={false} to="/login" value="Login" />
        </li>
      </ul>
    </nav>
  );
};
