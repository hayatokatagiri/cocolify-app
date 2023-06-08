import React from "react";
import { Button } from "@mui/material";

const PhysicalButton = () => {
  const handleClick = () => {};
  return (
    <Button variant="contained" color="info" onClick={handleClick}>
      からだがつらい
    </Button>
  );
};

export default PhysicalButton;
