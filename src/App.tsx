//MoneyButton.tsx、OtherButton.tsxはあとで削除する
//（機能をApp.tsxに移植済み）
import React, { useState } from "react";
// import MentalButton from "./components/mental/MentalButton";
// import MoneyButton from "./components/money/MoneyButton";
import MoneyResult from "./components/money/MoneyResult";
//import OtherButton from "./components/other/OtherButton";
import PhysicalButton from "./components/physical/PhysicalButton";
import { Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./cocolify.css";
import logo from "./cocolify_logo.png";
import Coffee from "./Coffee";
import VoiceButton from "./components/voice/VoiceButton";
import SNSButton from "./components/SNSButton";
import Navbar from "./components/Navbar/Navbar";

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
    <div>
      {/* <Navbar /> */}
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
        <Typography variant="h4">地域のサポートを探します</Typography>
        <Typography
          variant="h5"
          sx={{
            background: "#e3f2fd",
            color: "#1976d2",
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "12px 24px",
            boxShadow: "0 2px 8px rgba(25, 118, 210, 0.1)",
            mb: 2,
            textAlign: "center",
            display: "inline-block",
          }}
        >
          Cocolifyの最新版は
          <a
            href="https://magenta-donut-ed6ee4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#1976d2",
              textDecoration: "underline",
              margin: "0 8px",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
            こちら
          </a>
        </Typography>
        <Box display="flex" flexDirection="row" gap={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleMoneyButtonClick}
          >
            <SearchIcon />
          </Button>
        </Box>
        <Box>{/* <VoiceButton /> */}</Box>
        <Box>{showLocation && <MoneyResult />}</Box>
        <Box>
          {/* <MentalButton /> */}
          {/* <PhysicalButton /> */}
          {/* <Button
          variant="contained"
          color="primary"
          onClick={handleOtherButtonClick}
        >
          その他
        </Button> */}
        </Box>
        <Box>
          <SNSButton />
        </Box>
        <Box>{/* <Coffee /> */}</Box>
        <footer>
          <p>2022年6月現在</p>
          <p>
            データソース：
            <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000073432.html">
              厚生労働省
            </a>
          </p>
          <p>Copyright (C) Hayato Katagiri All rights reserved.</p>
        </footer>
      </Box>
    </div>
  );
};

export default App;
