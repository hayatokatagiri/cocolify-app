import React, { useState } from "react";
import { Button } from "@mui/material";

const VoiceButton: React.FC = () => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (): void => {
    setShowTextBox(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Button variant="contained" color="info" onClick={handleClick}>
        社会に声を届けたい
      </Button>
      {showTextBox && (
        <p>
          <textarea
            value={inputValue}
            onChange={handleChange}
            placeholder="お悩みの内容を入力してください"
            rows={5} // 表示する行数を指定
          />
        </p>
      )}
    </div>
  );
};

export default VoiceButton;
