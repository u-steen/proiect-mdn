import React, { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const data = [
    {
      id: 1,
      name: "gigel",
      health: 4,
      power: 2,
    },
    {
      id: 2,
      name: "mirel",
      health: 1,
      power: 1,
    },
  ];
  const [cards, setCards] = useState(data);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div
      className={`w-[600px] h-[300px] bg-purple-400/60 flex transition-transform duration-75 ${
        isHovered && "-translate-y-32"
      }`}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      {cards.map((el) => (
        <div key={el.id} className="mr-1">
          <Card name={el.name} health={el.health} power={el.power} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
