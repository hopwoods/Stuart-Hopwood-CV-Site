/** @jsx jsx */
import { FunctionComponent, useState } from "react";
import { jsx } from "@emotion/react";
import { Backdrop, CircularProgress } from "@material-ui/core";

export const Loading: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Backdrop className="loading" open={open} onClick={handleClose}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};
