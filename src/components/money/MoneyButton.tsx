import React, { useState } from "react";
import GetLocation from "./GetLocation";
import { Button } from "@mui/material";

const MoneyButton: React.FC = () => {
  const [showLocation, setShowLocation] = useState(false);

  const handleButtonClick = () => {
    setShowLocation(true);
  };

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleButtonClick}>
        お金
      </Button>
      {showLocation && <GetLocation />}
    </div>
  );
};

export default MoneyButton;
