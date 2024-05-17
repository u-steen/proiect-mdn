
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const Cards = ({ cardsArr }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [marginClass, setMarginClass] = useState("ml-1");

  const handleMouseHover = () => {
    setIsHovered(!isHovered);
  };
  useEffect(() => {
    console.log(cardsArr);
    if (cardsArr.length < 4) {
      setMarginClass("-ml-2");
    } else if (cardsArr.length < 6) {
      setMarginClass("-ml-6");
    } else if (cardsArr.length < 8) {
      setMarginClass("-ml-12");
    } else if (cardsArr.length < 12) {
      setMarginClass("-ml-16");
    } else {
      setMarginClass("-ml-24");
    }
  }, [cardsArr.length]);
  return (
    <div
      className={`w-fit h-[300px] bg-purple-400/60 flex transition-transform duration-75 ${
        isHovered && "-translate-y-32"
      }`}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      {cardsArr.map((el, index) => (
        <div className={`${index > 0 ? marginClass : ""}`}>
          <Card name={el.name} health={el.health} power={el.power} />
        </div>
      ))}
    </div>
  );
};

export default Cards;