import React, { useState } from "react";
import Board from "./components/Board/Board";
import Cards from "./components/Cards/Cards";
import Deck from "./components/Deck/Deck";
import EndTurnButton from "./components/EndTurnButton.jsx/EndTurnButton";
import Healthbar from "./components/Healthbar/Healthbar";
import ManaBar from "./components/ManaBar/ManaBar";
import {Link} from 'react-router-dom';

function Game() {
  //Ii dam lui Player1 un set de carti
  const defaultWalterCards = [
    { id: 1, name: "Walter White", health: 4, power: 2, image_url: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png" },
    { id: 2, name: "Goku", health: 1, power: 1, image_url: "https://wallpapers.com/images/hd/fierce-son-goku-60yc481rwik8mc5q.jpg" },
    { id: 3, name: "Raiden", health: 1, power: 1, image_url: "https://i.pinimg.com/originals/3e/55/05/3e5505e4ef7f8839f853e85c4a32019d.jpg" },
    { id: 4, name: "Gordon", health: 1, power: 1, image_url: "https://combineoverwiki.net/images/thumb/2/2b/Gordon_bust_rtb2.jpg/250px-Gordon_bust_rtb2.jpg" },
    { id: 5, name: "The Courier", health: 1, power: 1, image_url: "https://static.displate.com/857x1200/displate/2021-06-15/697f6d596af621eac58d252f4a85701f_4b1f8e21e57c8d021174b8c32ef40115.jpg" },
  ];

  //Ii dam lui Player2 un set de carti
  const defaultJesseCards = [
    { id: 6, name: "George", health: 3, power: 2, image_url: "https://i.kym-cdn.com/photos/images/newsfeed/000/117/982/1297836486170.jpg" },
    { id: 7, name: "Snake", health: 2, power: 2, image_url: "https://www.giantbomb.com/a/uploads/scale_small/16/164924/2778683-venom.jpg" },
    { id: 8, name: "Peter", health: 1, power: 1, image_url: "https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png" },
    { id: 9, name: "Jesse", health: 1, power: 1, image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jesse_Pinkman_S5B.png/220px-Jesse_Pinkman_S5B.png" },
    { id: 10, name: "Iohannis", health: 1, power: 1, image_url: "https://upload.wikimedia.org/wikipedia/commons/3/39/%D0%9A%D0%BB%D0%B0%D1%83%D1%81_%D0%99%D0%BE%D1%85%D0%B0%D0%BD%D0%BD%D0%B8%D1%81_%2852539721210%29.jpg" },
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
      <h2>
        <button className="absolute left-10 bottom-20 bg-white p-4 rounded shadow-md text-green-600">
          <Link to="/endpage">Resign/Forfeit</Link>
        </button>
      </h2>
    </div>
  );
}

export default Game;