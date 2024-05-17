import React, { useState } from "react";
import Board from "./components/Board/Board";
import Cards from "./components/Cards/Cards";
import Deck from "./components/Deck/Deck";
import EndTurnButton from "./components/EndTurnButton.jsx/EndTurnButton";
import Healthbar from "./components/Healthbar/Healthbar.jsx";

function Game() {
  const defaultCards = [
    {
      id: 1,
      name: "gigel",
      health: 4,
      power: 2,
    },
    {
      id: 2,
      name: "mirel",
      health: 1,
      power: 1,
    },
  ];
  const [cards, setCards] = useState(defaultCards);

  const handleDraw = (card) => {
    setCards([...cards, card]);
  };

  return (
    <div className="h-[900px] w-[1600px] bg-blue-200 mx-auto flex justify-center pt-12 relative overflow-hidden">
      <Board />
      <div className="absolute right-10 top-40">
        <Deck drawCallback={handleDraw} />
      </div>
      <div className="absolute -bottom-40">
        <Cards cardsArr={cards} />
      </div>
      <div className="absolute top-[420px] right-12">
        <EndTurnButton />
      </div>
      <div className="absolute bottom-20 right-20">
        <Healthbar />
      </div>
    </div>
  );
}

export default Game;