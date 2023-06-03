import React, { useState } from "react";
import MentalButton from "./components/mental/MentalButton";
import MoneyButton from "./components/money/MoneyButton";
import OtherButton from "./components/other/OtherButton";
import PhysicalButton from "./components/physical/PhysicalButton";
import { Box, Button, Typography } from "@mui/material";
import DisplayText from "./components/DisplayText";
import "./cocolify.css";
import logo from "./cocolify_logo.png";
// import BuyMeACoffeeButton from "./components/BuyMeAcCoffeeButton";

const App = () => {
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
        <MoneyButton />
        <MentalButton />
        <PhysicalButton />
        <OtherButton />
      </Box>
      <Box>
        <DisplayText />
      </Box>
      <Box>{/* <BuyMeACoffeeButton /> */}</Box>
    </Box>
  );
};

export default App;
