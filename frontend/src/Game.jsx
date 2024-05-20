import React, { useState } from "react";
import Board from "./components/Board/Board";
import Cards from "./components/Cards/Cards";
import Deck from "./components/Deck/Deck";
import EndTurnButton from "./components/EndTurnButton.jsx/EndTurnButton";
import Healthbar from "./components/Healthbar/Healthbar";
import ManaBar from "./components/ManaBar/ManaBar";

function Game() {
  //Ii dam lui Player1 un set de carti
  const defaultWalterCards = [
    { id: 1, name: "gigel", health: 4, power: 2 },
    { id: 2, name: "mirel", health: 1, power: 1 },
    { id: 3, name: "vasile", health: 1, power: 1 },
    { id: 4, name: "george", health: 1, power: 1 },
    { id: 5, name: "florin", health: 1, power: 1 },
  ];

  //Ii dam lui Player2 un set de carti
  const defaultJesseCards = [
    { id: 6, name: "jesse_card1", health: 3, power: 2 },
    { id: 7, name: "jesse_card2", health: 2, power: 2 },
    { id: 8, name: "jesse_card3", health: 1, power: 1 },
    { id: 9, name: "jesse_card4", health: 1, power: 1 },
    { id: 10, name: "jesse_card5", health: 1, power: 1 },
  ];

  //Declaram cata mana, health au playeri si care player incepe
  const [walterCards, setWalterCards] = useState(defaultWalterCards);
  const [jesseCards, setJesseCards] = useState(defaultJesseCards);
  const [walterMana, setWalterMana] = useState(20);
  const [jesseMana, setJesseMana] = useState(20);
  const [walterHealth, setWalterHealth] = useState(75);
  const [jesseHealth, setJesseHealth] = useState(50);
  const [currentPlayer, setCurrentPlayer] = useState('Walter');

  //functie pentru a putea trage carti din deck
  const handleDraw = (card) => {
    //veridicam cata mana au player1 si player2
    if (currentPlayer === 'Walter' && walterMana >= 2) {
      const newWalterMana = Math.min(walterMana - 2, 20);
      //costul pentru a trage o carte din deck este de 2 mana
      setWalterMana(newWalterMana);
      setWalterCards([...walterCards, card]);
    } else if (currentPlayer === 'Jesse' && jesseMana >= 2) {
      const newJesseMana = Math.min(jesseMana - 2, 20);
      //costul pentru a trage o carte din deck este de 2 mana
      setJesseMana(newJesseMana);
      setJesseCards([...jesseCards, card]);
    } else {
      console.log("Not enough mana to draw a card!");
    }
  };

  const handleRemoveCard = (cardId) => {
    if (currentPlayer === 'Walter') {
      setWalterCards(walterCards.filter(card => card.id !== cardId));
    } else {
      setJesseCards(jesseCards.filter(card => card.id !== cardId));
    }
  };

  //Functia care verifica a cui este tura
  const handleEndTurn = () => {
    console.log("End turn");
    if (currentPlayer === 'Walter') {
      //Player1 primeste 5 mana odata ce i se termina tura pentru a putea sa faca alte actiuni
      const newWalterMana = Math.min(walterMana + 5, 20);
      setWalterMana(newWalterMana);
      //Vine randul lui player2
      setCurrentPlayer('Jesse');
    } else {
      //Player2 primeste 5 mana odata ce i se termina tura pentru a putea sa faca alte actiuni
      const newJesseMana = Math.min(jesseMana + 5, 20);
      setJesseMana(newJesseMana);
      //Vine randul lui player1
      setCurrentPlayer('Walter');
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-blue-200 mx-auto flex justify-center pt-12 relative overflow-hidden">
      <div className="absolute left-10 top-20 bg-white p-4 rounded shadow-md">
        <p className="text-xl font-bold">Current Player:</p>
        <p className="text-2xl">{currentPlayer}</p>
      </div>
      <Board cards={currentPlayer === 'Walter' ? walterCards : jesseCards} onRemoveCard={handleRemoveCard}
        currentPlayer={currentPlayer} // Asigură-te că transmiti propria tură curentă
      />

      <div className="absolute right-10 top-40">
        <Deck drawCallback={handleDraw} disabled={(currentPlayer === 'Walter' && walterMana < 2) || (currentPlayer === 'Jesse' && jesseMana < 2)} />
      </div>
      <div className="absolute -bottom-40">
        <Cards cardsArr={currentPlayer === 'Walter' ? walterCards : jesseCards} />
      </div>
      <div className="absolute top-[420px] right-12">
        <EndTurnButton endTurnCallback={handleEndTurn} />
      </div>

      <div className="absolute bottom-20 right-20">
        {currentPlayer === 'Walter' ? 'Walter' : 'Jesse'}
        <Healthbar health={currentPlayer === 'Walter' ? walterHealth : jesseHealth} />
      </div>
      <div className="absolute bottom-40 right-20">
        Mana
        <ManaBar mana={currentPlayer === 'Walter' ? walterMana : jesseMana} />
      </div>

      <div className="absolute top-20 right-20">
        {currentPlayer === 'Walter' ? 'Jesse' : 'Walter'}
        <Healthbar health={currentPlayer === 'Walter' ? jesseHealth : walterHealth} />
      </div>
      <div className="absolute top-10 right-20">
        Mana
        <ManaBar mana={currentPlayer === 'Walter' ? jesseMana : walterMana} />
      </div>
    </div>
  );
}

export default Game;
