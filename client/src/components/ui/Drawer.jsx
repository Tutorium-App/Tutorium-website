import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";

const stat = ({ children, state, setState }) => {
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Button onClick={toggleDrawer("bottom", true)}></Button>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
      >
        {children}
      </Drawer>
    </>
  );
};

export default stat;
