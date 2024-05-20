import React, { useState } from "react";
import Cards from "../Cards/Cards";

const Board = ({ cards, onRemoveCard, currentPlayer }) => {
  const [droppedCards1, setDroppedCards1] = useState([]);
  const [droppedCards2, setDroppedCards2] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop1 = (event) => {
    event.preventDefault();
    if (currentPlayer !== 'Jesse') {
      alert("It's not Jesse's turn to play.");
      return;
    }
    if (droppedCards1.length >= 5) {
      alert("Maximum of 5 cards can be placed in this area.");
      return;
    }
    const cardId = parseInt(event.dataTransfer.getData("text/plain"), 10);
    const draggedCard = cards.find(card => card.id === cardId);
    if (draggedCard) {
      setDroppedCards1([...droppedCards1, draggedCard]);
      onRemoveCard(cardId);
    }
  };

  const handleDrop2 = (event) => {
    event.preventDefault();
    if (currentPlayer !== 'Walter') {
      alert("It's not Walter's turn to play.");
      return;
    }
    if (droppedCards2.length >= 5) {
      alert("Maximum of 5 cards can be placed in this area.");
      return;
    }
    const cardId = parseInt(event.dataTransfer.getData("text/plain"), 10);
    const draggedCard = cards.find(card => card.id === cardId);
    if (draggedCard) {
      setDroppedCards2([...droppedCards2, draggedCard]);
      onRemoveCard(cardId);
    }
  };

  // Inversăm poziția cărților când este rândul lui Jesse
  const jesseCards = currentPlayer === 'Jesse' ? droppedCards1 : droppedCards2;
  const walterCards = currentPlayer === 'Jesse' ? droppedCards2 : droppedCards1;

  return (
    <div>
      <div className="h-[350px] w-[1000px] bg-green-600 flex flex-col justify-between">
        <div
          className="bg-gray-800/40 h-[600px] w-fill"
          onDrop={handleDrop1}
          onDragOver={handleDragOver}
        >
          {/* Render cards for drop area 1 */}
          <Cards cardsArr={walterCards} />
        </div>
      </div>

      <div className="h-2 bg-black" />

      <div className="h-[350px] w-[1000px] bg-green-600 flex flex-col justify-between">
        <div
          className="bg-gray-800/40 h-[600px] w-fill"
          onDrop={handleDrop2}
          onDragOver={handleDragOver}
        >
          {/* Render cards for drop area 2 */}
          <Cards cardsArr={jesseCards} />
        </div>
      </div>
    </div>
  );
};

export default Board;
