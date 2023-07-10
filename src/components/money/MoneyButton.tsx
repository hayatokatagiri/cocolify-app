// 「お金」ボタンのコンポーネント
import React, { useState } from "react";
// 現在地を取得するMoneyResultコンポーネントの読み込み
import MoneyResult from "./MoneyResult";
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
      {showLocation && <MoneyResult />}
    </div>
  );
};

export default MoneyButton;
