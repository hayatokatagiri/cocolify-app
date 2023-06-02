import React, { useState } from "react";
import MentalButton from "./components/mental/MentalButton";
import MoneyButton from "./components/money/MoneyButton";
import OtherButton from "./components/other/OtherButton";
import PhysicalButton from "./components/physical/PhysicalButton";
import { Box, Button, Typography } from "@mui/material";
import DisplayText from "./components/DisplayText";
import GetLocation from "./components/money/GetLocation";

const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      alignItems="center"
      mt={10}
    >
      <Typography variant="h4">お困りのことはなんですか？</Typography>
      <Box display="flex" flexDirection="row" gap={1}>
        <MoneyButton />
        <MentalButton />
        {/* <PhysicalButton /> */}
        <OtherButton />
      </Box>
      <DisplayText />
    </Box>
  );
};

export default App;
