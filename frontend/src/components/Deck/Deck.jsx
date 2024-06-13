// Deck.jsx
import React from "react";

const Deck = ({ drawCallback, userId }) => {
  const drawCard = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/card?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newCard = await response.json();
      console.log("Drew a card:", newCard);
      drawCallback(newCard);
    } catch (error) {
      console.error("Error drawing card:", error);
    }
  };

  return (
    <div className="h-[250px] w-[180px] bg-red-200 hover:brightness-150  rounded-md overflow-hidden" onClick={drawCard}  style={{backgroundImage: 'url(https://e7.pngegg.com/pngimages/506/902/png-clipart-bicycle-playing-cards-card-game-united-states-playing-card-company-playing-card-back-game-dragon.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
    </div>
  );
};

export default Deck;
