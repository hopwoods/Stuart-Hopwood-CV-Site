/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  Banner,
  Navbar,
  Bubbles,
  About,
  Content,
  Footer,
} from "../components/layout";
import { Button } from "@material-ui/core";
import { HashLink } from "react-router-hash-link";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ScrollToTopButton from "../components/controls/scrollToTopButton";
import { toTopButton } from "./App.css";

function App() {
  return (
    <React.Fragment>
      <Banner id="home">
        <p>
          Hello I'm <span className="name">Stuart Hopwood.</span>
          <br />
          I'm a full stack Web Developer.
        </p>

        <Button
          className="about"
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<ArrowDownwardIcon />}
          component={HashLink}
          to="/#about"
          smooth
        >
          Find Out More
        </Button>
        <Bubbles />
      </Banner>
      <Navbar />
      <Content>
        <About />
        <div css={toTopButton}>
          <ScrollToTopButton color="secondary" />
        </div>
      </Content>
      <Footer />
    </React.Fragment>
  );
}

export default App;
