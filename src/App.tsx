import React from "react";
import MentalButton from "./components/mental/MentalButton";
import MoneyButton from "./components/money/MoneyButton";
import OtherButton from "./components/other/OtherButton";
import PhysicalButton from "./components/physical/PhysicalButton";

const App = () => {
  return (
    <div>
      <h1>お困りのことはなんですか？</h1>
      <MoneyButton />
      <MentalButton />
      <PhysicalButton />
      <OtherButton />
    </div>
  );
};

export default App;
