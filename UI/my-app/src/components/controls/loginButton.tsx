import React, { FunctionComponent } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

export const LoginButton: FunctionComponent = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      className="login"
      variant="outlined"
      color="primary"
      size="large"
      endIcon={<ExitToApp />}
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};
