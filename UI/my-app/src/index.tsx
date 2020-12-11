import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Container, Footer } from "./components/layout/";
import { StateProvider } from "./globalState";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Routes } from "./components/services";

library.add(fab, far, fas);

const routing = (
  <React.StrictMode>
    <Router>
      <StateProvider>
        <Container>
          <Routes />
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
