// Deck.jsx
import React from "react";

const Deck = ({ drawCallback }) => {
  const drawCard = () => {
    console.log("Drew a card");
    drawCallback({ id: 20, name: "gica", health: 2, power: 1 }, 2); // Adaugă a doua valoare pentru cantitatea de mana de scăzut
  };

  return (
    <div className="h-[250px] w-[180px] bg-red-200 hover:bg-red-300" onClick={drawCard}>
      Click to draw card
    </div>
  );
};

export default Deck;
