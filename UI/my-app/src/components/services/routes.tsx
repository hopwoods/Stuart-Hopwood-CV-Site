/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import App from "../../pages/App";
import NotFoundPage from "../../pages/NotFoundPage";

export function Routes() {
  const location = useLocation();
  return (
    <React.Fragment>
      {/* <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="#home" component={App} />
        <Route exact path="#about" component={App} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
      {/* </CSSTransition>
      </TransitionGroup> */}
    </React.Fragment>
  );
}
