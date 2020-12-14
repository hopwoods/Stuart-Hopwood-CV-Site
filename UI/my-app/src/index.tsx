import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./components/layout/";
import { StateProvider } from "./globalState";
import { Routes, ScrollToTop } from "./services";
import { ThemeProvider } from "@material-ui/core";
import { materialTheme } from "./style";
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const routing = (
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uzn2jv6o.eu.auth0.com"
      clientId="jDQJS0iW7T1i3RCpmTYjAqOzFDiiUZ25"
      redirectUri="https://localhost:3000/admin"
      audience="https://localhost:5001/api/"
    >
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
    </Auth0Provider>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
