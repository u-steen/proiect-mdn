// Board.jsx
import React, { useState } from "react";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";

const Board = () => {
  const [droppedCards1, setDroppedCards1] = useState([]);
  const [droppedCards2, setDroppedCards2] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop1 = (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text/plain");
    const draggedCard = document.getElementById(cardId);
    setDroppedCards1([...droppedCards1, { id: cardId }]);
    event.target.appendChild(draggedCard);
  };

  const handleDrop2 = (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text/plain");
    const draggedCard = document.getElementById(cardId);
    setDroppedCards2([...droppedCards2, { id: cardId }]);
    event.target.appendChild(draggedCard);
  };

  return (
    <div>
      <div className="h-[350px] w-[1000px] bg-green-600 flex flex-col justify-between">
        <div
          className="bg-gray-800/40 h-[600px] w-fill"
          onDrop={handleDrop1}
          onDragOver={handleDragOver}
        >
          {/* Render cards for drop area 1 */}
          <Cards cardsArr={droppedCards1} />
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
          <Cards cardsArr={droppedCards2} />
        </div>
      </div>
    </div>
  );
};

export default Board;
