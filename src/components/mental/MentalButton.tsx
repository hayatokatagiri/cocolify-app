import React from "react";

const MentalButton = () => {
  const handleClick = () => {
    alert("心の専門家である公認心理士・臨床心理士を探す外部サイトに移動します");
    window.location.href = "http://www.jsccp.jp/near/";
  };
  return <button onClick={handleClick}>こころ</button>;
};

export default MentalButton;
