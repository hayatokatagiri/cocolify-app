import React, { useState } from "react";
import GetLocation from "./GetLocation";

const MoneyButton: React.FC = () => {
  const [showLocation, setShowLocation] = useState(false);

  const handleButtonClick = () => {
    setShowLocation(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>お金</button>
      {showLocation && <GetLocation />}
    </div>
  );
};

export default MoneyButton;
