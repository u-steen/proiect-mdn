// EndTurnButton.jsx
import React from "react";

const EndTurnButton = ({ endTurnCallback }) => {
  const handleEndTurn = () => {
    endTurnCallback(); // Apelăm funcția de callback pentru a semnala că s-a terminat tura
  };

  return (
    <div className="bg-blue-800 w-[140px] h-[60px] hover:bg-blue-700" onClick={handleEndTurn}>
      End Turn
    </div>
  );
};

export default EndTurnButton;
