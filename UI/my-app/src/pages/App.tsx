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
import { Link as RouterLink } from "react-router-dom";
import { muiTheme } from "../style";
import { Button, ThemeProvider } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function App() {
  return (
    <React.Fragment>
      <Banner id="home">
        <p>
          Hello I'm <span className="name">Stuart Hopwood.</span>
          <br />
          I'm a full stack Web Developer.
        </p>
        <ThemeProvider theme={muiTheme}>
          <Button
            className="about"
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowDownwardIcon />}
            component={RouterLink}
            to="#about"
          >
            Find Out More
          </Button>
          <Bubbles />
        </ThemeProvider>
      </Banner>
      <Navbar />
      <Content>
        <About />
      </Content>
      <Footer />
    </React.Fragment>
  );
}

export default App;
