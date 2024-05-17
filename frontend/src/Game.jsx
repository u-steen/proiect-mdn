// Game.jsx
import React, { useState } from "react";
import Board from "./components/Board/Board";
import Cards from "./components/Cards/Cards";
import Deck from "./components/Deck/Deck";
import EndTurnButton from "./components/EndTurnButton.jsx/EndTurnButton";
import Healthbar1 from "./components/Healthbar/Healthbar1.jsx";
import Healthbar2 from "./components/Healthbar2/Healthbar2.jsx";
import ManaBar1 from "./components/ManaBar1/ManaBar1.jsx";
import ManaBar2 from "./components/ManaBar2/ManaBar2.jsx";

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
    {
      id: 3,
      name: "vasile",
      health: 1,
      power: 1,
    },
    {
      id: 4,
      name: "george",
      health: 1,
      power: 1,
    },
    {
      id: 5,
      name: "florin",
      health: 1,
      power: 1,
    },
  ];
  const [cards, setCards] = useState(defaultCards);
  const [mana, setMana] = useState(20); // Adaugă un state pentru mana

  const handleDraw = (card) => {
    if (mana >= 2) {
      setMana(prevMana => prevMana - 2);
      setCards([...cards, card]);
    } else {
      console.log("Not enough mana to draw a card!");
    }
  };

  const handleRemoveCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
  };

  const handleEndTurn = () => {
    console.log("End turn");
    setMana(prevMana => prevMana + 5); // Adăugăm 5 mana la începutul fiecărei noi ture
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-blue-200 mx-auto flex justify-center pt-12 relative overflow-hidden">
      <Board cards={cards} onRemoveCard={handleRemoveCard} />
      <div className="absolute right-10 top-40">
        <Deck drawCallback={handleDraw} disabled={mana < 2} />
      </div>
      <div className="absolute -bottom-40">
        <Cards cardsArr={cards} />
      </div>
      <div className="absolute top-[420px] right-12">
        <EndTurnButton endTurnCallback={handleEndTurn} /> {/* Transmiterea funcției de callback */}
      </div>

      <div className="absolute bottom-20 right-20">
        Walter
        <Healthbar1 />
      </div>
      <div className="absolute bottom-40 right-20">
        Mana
        <ManaBar1 mana={mana} />
      </div>

      <div className="absolute top-20 right-20">
        Jesse
        <Healthbar2 />
      </div>
      <div className="absolute top-10 right-20">
        Mana
        <ManaBar2 />
      </div>
    </div>
  );
}

export default Game;
