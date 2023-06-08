//MoneyButton.tsx、OtherButton.tsxはあとで削除する
//（機能をApp.tsxに移植済み）
import React, { useState } from "react";
import MentalButton from "./components/mental/MentalButton";
// import MoneyButton from "./components/money/MoneyButton";
import MoneyResult from "./components/money/MoneyResult";
//import OtherButton from "./components/other/OtherButton";
import PhysicalButton from "./components/physical/PhysicalButton";
import { Box, Button, Typography } from "@mui/material";
import "./cocolify.css";
import logo from "./cocolify_logo.png";
import Coffee from "./Coffee";
import VoiceButton from "./components/voice/VoiceButton";
import SNSButton from "./components/SNSButton";

const App = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [showTextBox, setShowTextBox] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleMoneyButtonClick = () => {
    setShowLocation(true);
  };

  const handleOtherButtonClick = (): void => {
    setShowTextBox(true);
  };

  const handleOtherChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputValue(e.target.value);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      alignItems="center"
      mt={10}
    >
      <header>
        <div className="header-logo">
          <img src={logo} width={100} height={100} alt="Cocolify Logo" />
        </div>
        <div className="header-title">{/* <h1> Cocolify </h1> */}</div>
      </header>
      <Typography variant="h4">お困りのことはなんですか？</Typography>
      <Box display="flex" flexDirection="row" gap={1}>
        <Button
          variant="contained"
          color="success"
          onClick={handleMoneyButtonClick}
        >
          お金
        </Button>
        <MentalButton />
        <PhysicalButton />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleOtherButtonClick}
        >
          その他
        </Button>
      </Box>
      <Box>
        <VoiceButton />
      </Box>
      <Box>{showLocation && <MoneyResult />}</Box>
      {showTextBox && (
        <p>
          <textarea
            value={inputValue}
            onChange={handleOtherChange}
            placeholder="お悩みの内容を入力してください"
            rows={5} // 表示する行数を指定
          />
        </p>
      )}
      <Box>
        <SNSButton />
      </Box>
      <Box>
        <Coffee />
      </Box>
      <footer>Copyright (C) Hayato Katagiri All rights reserved.</footer>
    </Box>
  );
};

export default App;
