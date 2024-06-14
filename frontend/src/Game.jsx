import React, { useState } from "react";
import Board from "./components/Board/Board";
import Cards from "./components/Cards/Cards";
import Deck from "./components/Deck/Deck";
import EndTurnButton from "./components/EndTurnButton.jsx/EndTurnButton";
import Healthbar from "./components/Healthbar/Healthbar";
import ManaBar from "./components/ManaBar/ManaBar";
import { Link } from 'react-router-dom';

function Game() {
  //ii dam lui Player1(Walter) pachetul sau de carti
  const defaultWalterCards = [
    { id: 1, name: "Walter White", health: 4, power: 5, image_url: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png" },
    { id: 2, name: "Goku", health: 1, power: 5, image_url: "https://wallpapers.com/images/hd/fierce-son-goku-60yc481rwik8mc5q.jpg" },
    { id: 3, name: "Raiden", health: 1, power: 5, image_url: "https://i.pinimg.com/originals/3e/55/05/3e5505e4ef7f8839f853e85c4a32019d.jpg" },
    { id: 4, name: "Gordon", health: 1, power: 5, image_url: "https://combineoverwiki.net/images/thumb/2/2b/Gordon_bust_rtb2.jpg/250px-Gordon_bust_rtb2.jpg" },
    { id: 5, name: "The Courier", health: 1, power: 5, image_url: "https://static.displate.com/857x1200/displate/2021-06-15/697f6d596af621eac58d252f4a85701f_4b1f8e21e57c8d021174b8c32ef40115.jpg" },
  ];

  //ii dam lui Player2(Jesse) pachetul sau de carti
  const defaultJesseCards = [
    { id: 6, name: "George", health: 3, power: 2, image_url: "https://i.kym-cdn.com/photos/images/newsfeed/000/117/982/1297836486170.jpg" },
    { id: 7, name: "Snake", health: 2, power: 2, image_url: "https://www.giantbomb.com/a/uploads/scale_small/16/164924/2778683-venom.jpg" },
    { id: 8, name: "Peter", health: 1, power: 1, image_url: "https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png" },
    { id: 9, name: "Jesse", health: 1, power: 1, image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jesse_Pinkman_S5B.png/220px-Jesse_Pinkman_S5B.png" },
    { id: 10, name: "Iohannis", health: 1, power: 1, image_url: "https://upload.wikimedia.org/wikipedia/commons/3/39/%D0%9A%D0%BB%D0%B0%D1%83%D1%81_%D0%99%D0%BE%D1%85%D0%B0%D0%BD%D0%BD%D0%B8%D1%81_%2852539721210%29.jpg" },
  ];

  //declaram mai multe constante care reprezinta cantitatea de mana si viata a playeri-lor, pachetele lor de carti, playerul curent si cartea pe care o atingem
  const [walterCards, setWalterCards] = useState(defaultWalterCards);
  const [jesseCards, setJesseCards] = useState(defaultJesseCards);
  const [walterMana, setWalterMana] = useState(20);
  const [jesseMana, setJesseMana] = useState(20);
  const [walterHealth, setWalterHealth] = useState(20);
  const [jesseHealth, setJesseHealth] = useState(20);
  const [currentPlayer, setCurrentPlayer] = useState('Walter');
  const [highlightedCardId, setHighlightedCardId] = useState(null);

  //functie cu care putem selecta o carte de pe tabla de joc
  const handleHighlightCard = (cardId) => {
    setHighlightedCardId(cardId);
  };

  //functie pentru a adauga o carte in pachetul nostru
  const handleDropCard = (card, player) => {
    if (player === 'Walter') {
      setWalterCards([...walterCards, card]);
    } else {
      setJesseCards([...jesseCards, card]);
    }
  };

  //functie care verifica cui ii este randul
  const handleEndTurn = () => {
    if (currentPlayer === 'Walter') {
      //adaugam +2 mana pentru player-ul care si-a terminat tura
      const newWalterMana = Math.min(walterMana + 2, 20);
      setWalterMana(newWalterMana);
      setCurrentPlayer('Jesse');
      //player-ul urmator devine cel curent
    } else {
      //adaugam +2 mana pentru player-ul care si-a terminat tura
      const newJesseMana = Math.min(jesseMana + 2, 20);
      setJesseMana(newJesseMana);
      setCurrentPlayer('Walter');
      //player-ul urmator devine cel curent
    }
  };

  //functie care permite playerilor sa traga carti din deck cat timp au mai mult de 3 mana
  const handleDraw = (card) => {
    if (currentPlayer === 'Walter' && walterMana >= 3) {
      const newWalterMana = Math.max(walterMana - 3, 0);
      setWalterMana(newWalterMana);
      setWalterCards([...walterCards, card]);
    } else if (currentPlayer === 'Jesse' && jesseMana >= 3) {
      const newJesseMana = Math.max(jesseMana - 3, 0);
      setJesseMana(newJesseMana);
      setJesseCards([...jesseCards, card]);
    } else {
      console.log("Not enough mana to draw a card!");
    }
  };

  //functie care permite playerului sa traga o carte care se afla in pachet si sa scadem mana playerului cu -3 cand punem o carte pe tabla
  const handleRemoveCard = (cardId) => {
    let cardPower = 0;

    if (currentPlayer === 'Walter') {
      const cardToRemove = walterCards.find(card => card.id === cardId);
      if (cardToRemove) {
        cardPower = cardToRemove.power;
        const updatedWalterCards = walterCards.filter(card => card.id !== cardId);
        setWalterCards(updatedWalterCards);
      }
      const newWalterMana = Math.max(walterMana - cardPower, 0);
      setWalterMana(newWalterMana);
    } else {
      const cardToRemove = jesseCards.find(card => card.id === cardId);
      if (cardToRemove) {
        cardPower = cardToRemove.power;
        const updatedJesseCards = jesseCards.filter(card => card.id !== cardId);
        setJesseCards(updatedJesseCards);
      }
      const newJesseMana = Math.max(jesseMana - cardPower, 0);
      setJesseMana(newJesseMana);
    }
  };

  return (
    //interfatele noastre: imaginea de ecran, tabla de joc, deck-ul, pachetul de carti, butonul de tura si cel de surrender, bara de viata si bara de mana
    <div className="h-[100vh] w-[100vw] bg-blue-200 mx-auto flex justify-center pt-12 relative overflow-hidden" style={{ backgroundImage: 'url(https://cdn1.epicgames.com/ue/product/Screenshot/FightingArenasAdvert-10-1920x1080-1608b4ce1cf79833dba5507ba0a289c6.jpg?resize=1&w=1920)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="absolute left-10 top-20 bg-white p-4 rounded shadow-md">
        <p className="text-xl font-bold">Current Player:</p>
        <p className="text-2xl">{currentPlayer}</p>
      </div>
      <Board
        cards={currentPlayer === 'Walter' ? walterCards : jesseCards}
        onRemoveCard={handleRemoveCard}
        currentPlayer={currentPlayer}
        highlightedCardId={highlightedCardId}
        onHighlightCard={handleHighlightCard}
        opponentCards={currentPlayer === 'Walter' ? jesseCards : walterCards}
        walterHealth={walterHealth}
        jesseHealth={jesseHealth}
        setWalterHealth={setWalterHealth}
        setJesseHealth={setJesseHealth}
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

      <div className="absolute bottom-20 right-20" style={{ color: 'white' }}>
        {currentPlayer === 'Walter' ? 'Walter' : 'Jesse'}
        <Healthbar health={currentPlayer === 'Walter' ? walterHealth : jesseHealth} />
      </div>
      <div className="absolute bottom-40 right-20" style={{ color: 'white' }}>
        Mana
        <ManaBar mana={currentPlayer === 'Walter' ? walterMana : jesseMana} />
      </div>
      <div className="absolute top-20 right-20" style={{ color: 'white' }}>
        {currentPlayer === 'Walter' ? 'Jesse' : 'Walter'}
        <Healthbar health={currentPlayer === 'Walter' ? jesseHealth : walterHealth} />
      </div>
      <div className="absolute top-10 right-20" style={{ color: 'white' }}>
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
