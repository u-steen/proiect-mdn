import React, { useState } from "react";
import Card from "../Card/Card";

const Cards = ({ cardsArr }) => {
  console.log("Cards", cardsArr);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div
      className={`w-fit h-[300px] bg-purple-400/60 flex transition-transform duration-75 ${
        isHovered && "-translate-y-32"
      }`}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      {cardsArr.map((el) => (
        <div key={el.id} className="mr-1">
          <Card name={el.name} health={el.health} power={el.power} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
