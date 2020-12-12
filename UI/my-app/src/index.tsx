import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./components/layout/";
import { StateProvider } from "./globalState";
import { Routes, ScrollToTop } from "./components/services";
import { ThemeProvider } from "@material-ui/core";
import { materialTheme } from "./style";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const routing = (
  <React.StrictMode>
    <Router>
      <StateProvider>
        <ScrollToTop />
        <Container>
          <ThemeProvider theme={materialTheme}>
            <Routes />
          </ThemeProvider>
        </Container>
      </StateProvider>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
