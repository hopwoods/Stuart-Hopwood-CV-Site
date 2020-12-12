/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Route, Switch, Redirect } from "react-router-dom";
import App from "../../pages/App";
import NotFoundPage from "../../pages/NotFoundPage";

export function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="#home" component={App} />
        <Route exact path="#about" component={App} />
        <Route exact path="#experience" component={App} />
        <Route exact path="#education" component={App} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </React.Fragment>
  );
}
