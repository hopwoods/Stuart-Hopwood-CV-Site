/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Navbar, Content, Footer, Banner } from "../components/layout";
import { LogoutButton } from "../components/controls";
import { style } from "./administration.css";

function Admin() {
  return (
    <React.Fragment>
      <Banner id="administration" fullscreen={false}>
        <h1 className="inverse">Admin Area</h1>
      </Banner>
      <Navbar />
      <Content>
        <div css={style}>
          <p>This is the Admin Area and you must have logged in.</p>
          <LogoutButton />
        </div>
      </Content>
      <Footer />
    </React.Fragment>
  );
}

export default Admin;
