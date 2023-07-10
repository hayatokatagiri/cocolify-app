import { Button } from "@mui/material";
import React from "react";

const MentalButton = () => {
  const handleClick = () => {
    alert("心の専門家である臨床心理士を探す外部サイトに移動します");
    window.location.href = "http://www.jsccp.jp/near/";
  };
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      こころがしんどい
    </Button>
  );
};

export default MentalButton;
