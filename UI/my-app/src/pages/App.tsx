/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { main } from "./App.css";
import { Banner, Navbar, Bubbles } from "../components/layout";
import { Link as RouterLink } from "react-router-dom";
import { muiTheme } from "../style";
import { Button, ThemeProvider } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function App() {
  return (
    <React.Fragment>
      <Banner>
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
      <div css={main}>
        <h3>Welcome to the Stuart Hopwood Photography Asset Database</h3>
        <p>
          Below you can find a list of all your Photography Gear, how much it
          worth, and how much you paid.
          <br />
          You also find serial numbers for items that have them which will be
          usefult for insurance purposes.
          <br />
          Click the <Add /> button to add a new asset to the database.
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;
