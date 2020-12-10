import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Container, Content, Footer } from "./components/layout/";
import { StateProvider } from "./globalState";
import "./index.css";
import App from "./pages/App";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import * as serviceWorker from "./serviceWorker";

library.add(fab, far, fas);

const routing = (
  <React.StrictMode>
    <Router>
      <StateProvider>
        <Container>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          <Content />
          <Footer />
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
