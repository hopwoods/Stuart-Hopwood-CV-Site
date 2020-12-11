/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "@emotion/react";
import { style } from "./footer.css";

export const Footer: FunctionComponent = ({ children }) => {
  const GetYear = () => {
    var date = new Date();
    return date.getFullYear();
  };
  return (
    <footer css={style}>
      &copy; Stuart Hopwood {GetYear()}
      {children}
    </footer>
  );
};
