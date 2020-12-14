import React, { ComponentType, FunctionComponent } from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/layout";

type ProtectedRouteProps = {
  component: ComponentType;
  exact: boolean;
  path: string;
};
export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  exact,
  path,
  component,
  ...args
}) => (
  <Route
    exact={exact}
    path={path}
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);
