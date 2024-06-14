// EndTurnButton.jsx
import React from "react";

//componenta care reprezinta un buton pe care il apasam pentru a ne termina tura
const EndTurnButton = ({ endTurnCallback }) => {
  const handleEndTurn = () => {
    endTurnCallback(); // Apelăm funcția de callback pentru a semnala că s-a terminat tura
  };

  return (
    <div className="bg-blue-800 w-[140px] h-[60px] hover:brightness-150  rounded-md overflow-hidden" onClick={handleEndTurn}   style={{backgroundImage: 'url(https://png.pngtree.com/png-clipart/20220705/ourmid/pngtree-finish-button-in-pixel-art-style-png-image_5683603.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
    </div>
  );
};

export default EndTurnButton;
