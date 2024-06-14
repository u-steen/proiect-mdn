// Deck.jsx
import React from "react";

//componenta care reprezinta un deck din care putem trage o carte random pentru a juca in continuare
const Deck = ({ drawCallback }) => {
  const drawCard = () => {
    console.log("Drew a card");
    drawCallback({ id: 20, name: "gica", health: 2, power: 1 }, 2); // Adaugă a doua valoare pentru cantitatea de mana de scăzut
  };

  return (
    <div className="h-[250px] w-[180px] bg-red-200 hover:brightness-150  rounded-md overflow-hidden" onClick={drawCard}  style={{backgroundImage: 'url(https://e7.pngegg.com/pngimages/506/902/png-clipart-bicycle-playing-cards-card-game-united-states-playing-card-company-playing-card-back-game-dragon.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
    </div>
  );
};

export default Deck;
