// Cards.jsx
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const Cards = ({ cardsArr, draggable = true, hoverEffect = true, highlightedCardId, onHighlightCard, backgroundColor = "bg-orange-800/60" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [marginClass, setMarginClass] = useState("ml-1");

  const handleMouseHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
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

  const handleDragStart = (event, cardId) => {
    if (draggable) {
      event.dataTransfer.setData("text/plain", cardId);
    }
  };

  return (
    <div
      className={`w-fit h-[300px] ${backgroundColor} flex transition-transform duration-75 ${
        isHovered && hoverEffect ? "-translate-y-32" : ""
      }`}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      {cardsArr.map((el, index) => (
        <div className={`${index > 0 ? marginClass : ""}`} key={el.id}>
          <div
            draggable={draggable}
            onDragStart={(event) => handleDragStart(event, el.id)}
          >
            <Card
              id={el.id}
              name={el.name}
              health={el.health}
              power={el.power}
              image_url={el.image_url}
              draggable={draggable}
              hoverEffect={hoverEffect}
              isHighlighted={highlightedCardId === el.id}
              onHighlightCard={onHighlightCard}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
