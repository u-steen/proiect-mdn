import React, { useState } from "react";
import Cards from "../Cards/Cards";

const Board = ({cards, onRemoveCard, currentPlayer, highlightedCardId, onHighlightCard, opponentCards, setWalterHealth, setJesseHealth,walterHealth,jesseHealth}) => {
  // Starea locală pentru cărțile lăsate pe tablă pentru fiecare player
  const [droppedCards1, setDroppedCards1] = useState([]);
  const [droppedCards2, setDroppedCards2] = useState([]);

  // Funcție pentru gestionarea evenimentului de drag over (peste zona de drop)
  const handleDragOver = (event) => {
    event.preventDefault();// Previne comportamentul implicit al browser-ului pentru drag over
  };

  // Funcție pentru gestionarea atacului între cărți
  const handleAttack = (attackerId, defenderId, power) => {
    // Determină cărțile atacatorului și apărătorului în funcție de jucătorul curent
    const attackerCard = currentPlayer === 'Walter' ? droppedCards2.find(card => card.id === attackerId) : droppedCards1.find(card => card.id === attackerId);
    const defenderCard = currentPlayer === 'Walter' ? droppedCards1.find(card => card.id === defenderId) : droppedCards2.find(card => card.id === defenderId);

     // Calculează noul health al cartii după atac
    if (attackerCard && defenderCard) {
      const newDefenderHealth = Math.max(defenderCard.health - power, 0);

      // Actualizează starea cărții apărătorului în funcție de jucătorul curent
      if (currentPlayer === 'Walter') {
        setDroppedCards1(droppedCards1.map(card => card.id === defenderId ? { ...card, health: newDefenderHealth } : card));
      } else {
        setDroppedCards2(droppedCards2.map(card => card.id === defenderId ? { ...card, health: newDefenderHealth } : card));
      }
      
       // Verifică dacă cartea a fost eliminata (sănătatea <= 0)
      if (newDefenderHealth <= 0) {
        if (currentPlayer === 'Walter') {
          // Elimină cărțile din tablă și ajustează health-ul lui Jesse
          setDroppedCards1(droppedCards1.filter(card => card.id !== defenderId));
          setJesseHealth(prevHealth => Math.max(prevHealth - attackerCard.power, 0));
        } else {
          // Elimină cărțile din tablă și ajustează health-ul lui Walter
          setDroppedCards2(droppedCards2.filter(card => card.id !== defenderId));
          setWalterHealth(prevHealth => Math.max(prevHealth - attackerCard.power, 0));
        }
      }
    }
  };

  // Funcție pentru gestionarea drop-ului pe zona playerului 1 (Jesse)
  const handleDrop1 = (event) => {
    event.preventDefault();
    // Verifică dacă este rândul lui Jesse să joace
    if (currentPlayer !== 'Jesse') {
      alert("It's not Jesse's turn to play.");
      return;
    }
    // Verifică dacă nu s-au depășit maximul de 5 cărți pe tablă
    if (droppedCards1.length >= 5) {
      alert("Maximum of 5 cards can be placed in this area.");
      return;
    }
    // Identifică id-ul cărții trase (dragged card)
    const cardId = parseInt(event.dataTransfer.getData("text/plain"), 10);
    const draggedCard = cards.find(card => card.id === cardId);
    // Dacă există cărțile, le adaugă la tablă și apelează funcția de eliminare a cărții
    if (draggedCard) {
      setDroppedCards1([...droppedCards1, draggedCard]);
      onRemoveCard(cardId);
    }
  };

  // Funcție pentru gestionarea drop-ului pe zona playerului 2 (Walter)
  const handleDrop2 = (event) => {
    event.preventDefault();
    // Verifică dacă este rândul lui Walter să joace
    if (currentPlayer !== 'Walter') {
      alert("It's not Walter's turn to play.");
      return;
    }
    // Verifică dacă nu s-au depășit maximul de 5 cărți pe tablă
    if (droppedCards2.length >= 5) {
      alert("Maximum of 5 cards can be placed in this area.");
      return;
    }
    // Identifică id-ul cărții trase (dragged card)
    const cardId = parseInt(event.dataTransfer.getData("text/plain"), 10);
    const draggedCard = cards.find(card => card.id === cardId);
    // Dacă există cărțile, le adaugă la tablă și apelează funcția de eliminare a cărții
    if (draggedCard) {
      setDroppedCards2([...droppedCards2, draggedCard]);
      onRemoveCard(cardId);
    }
  };

   // Atribuie cărțile corecte pentru fiecare jucător în funcție de currentPlayer
  const jesseCards = currentPlayer === 'Jesse' ? droppedCards1 : droppedCards2;
  const walterCards = currentPlayer === 'Jesse' ? droppedCards2 : droppedCards1;

   // Componenta board care contine 2 table identice
  return (
    <div>
      <div className="h-[350px] w-[1000px] bg-orange-800 flex flex-col justify-between rounded-t-lg bg-opacity-75" style={{border: '10px solid rgba(0, 0, 0, 0)'}}>
        <div className="bg-gray-800/40 h-[600px] w-fill rounded-b-lg" onDrop={handleDrop1} onDragOver={handleDragOver}>
          <Cards
            cardsArr={walterCards}
            draggable={false}
            hoverEffect={false}
            highlightedCardId={highlightedCardId}
            onHighlightCard={onHighlightCard}
            onAttack={handleAttack}
            opponentCards={jesseCards}
            backgroundColor="bg-transparent"
          />
        </div>
      </div>

      <div className="h-2 bg-black" />

      <div className="h-[350px] w-[1000px] bg-orange-800 flex flex-col justify-between rounded-b-lg bg-opacity-75" style={{border: '10px solid rgba(0, 0, 0, 0)'}}>
        <div className="bg-gray-800/40 h-[600px] w-fill rounded-b-lg" onDrop={handleDrop2} onDragOver={handleDragOver}>
          <Cards
            cardsArr={jesseCards}
            draggable={false}
            hoverEffect={false}
            highlightedCardId={highlightedCardId}
            onHighlightCard={onHighlightCard}
            onAttack={handleAttack}
            opponentCards={walterCards}
            backgroundColor="bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
