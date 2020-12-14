import React, { FunctionComponent } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

export const LogoutButton: FunctionComponent = () => {
  const { logout } = useAuth0();

  return (
    <Button
      className="login"
      variant="outlined"
      color="primary"
      size="large"
      endIcon={<MeetingRoomIcon />}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};
