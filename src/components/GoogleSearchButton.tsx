import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface KeywordsType {
  keywords: string;
}

const GoogleSearchButton = ({ keywords }: KeywordsType) => {
  const handleClick = () => {
    const searchQuery = keywords.split(" ").join("+");
    const searchUrl = `https://www.google.com/search?q= ${searchQuery}`;
    window.open(searchUrl, "_blank");
  };
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={handleClick}
    >
      Web検索
    </Button>
  );
};

export default GoogleSearchButton;
