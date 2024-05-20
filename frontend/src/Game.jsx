import React, { useState } from "react";
import Board from "./components/Board/Board";
import Cards from "./components/Cards/Cards";
import Deck from "./components/Deck/Deck";
import EndTurnButton from "./components/EndTurnButton.jsx/EndTurnButton";
import Healthbar from "./components/Healthbar/Healthbar";
import ManaBar from "./components/ManaBar/ManaBar";

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
  const [walterMana, setWalterMana] = useState(20); // Mana lui Walter
  const [jesseMana, setJesseMana] = useState(20); // Mana lui Jesse
  const [walterHealth, setWalterHealth] = useState(75); // HealthBar-ul lui Walter
  const [jesseHealth, setJesseHealth] = useState(50); // HealthBar-ul lui Jesse

  const handleDraw = (card) => {
    if (walterMana >= 2) {
      setWalterMana(prevMana => prevMana - 2);
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
    setWalterMana(prevMana => prevMana + 5); // Adauga 5 mana lui Walter dupa o tura
    setJesseMana(prevMana => prevMana + 5); // Adauga 5 mana lui Jesse dupa o tura
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-blue-200 mx-auto flex justify-center pt-12 relative overflow-hidden">
      <Board cards={cards} onRemoveCard={handleRemoveCard} />
      <div className="absolute right-10 top-40">
        <Deck drawCallback={handleDraw} disabled={walterMana < 2} />
      </div>
      <div className="absolute -bottom-40">
        <Cards cardsArr={cards} />
      </div>
      <div className="absolute top-[420px] right-12">
        <EndTurnButton endTurnCallback={handleEndTurn} /> {/* Pass the end turn callback */}
      </div>

      <div className="absolute bottom-20 right-20">
        Walter
        <Healthbar health={walterHealth} /> {/* Pass Walter's health */}
      </div>
      <div className="absolute bottom-40 right-20">
        Mana
        <ManaBar mana={walterMana} /> {/* Pass Walter's mana */}
      </div>

      <div className="absolute top-20 right-20">
        Jesse
        <Healthbar health={jesseHealth} /> {/* Pass Jesse's health */}
      </div>
      <div className="absolute top-10 right-20">
        Mana
        <ManaBar mana={jesseMana} /> {/* Pass Jesse's mana */}
      </div>
    </div>
  );
}

export default Game;
