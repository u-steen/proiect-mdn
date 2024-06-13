import React, { useState } from "react";

const Card = ({ id, name, image_url, health, power, draggable, hoverEffect, isHighlighted, onHighlightCard }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    if (hoverEffect) {
      setIsHovered(!isHovered);
    }
  };

  const handleClick = () => {
    onHighlightCard(id);
  };

  return (
    <div
      id={id}
      className={`h-[250px] w-[180px] relative border-2 border-black/20 transition-transform duration-100  rounded-md overflow-hidden${
        isHovered && hoverEffect ? "-translate-y-12 z-10" : ""
      } ${isHighlighted ? "brightness-50" : ""}`} // Adăugăm clasa pentru a întuneca imaginea
      style={{ backgroundImage: `url(${image_url})`, backgroundSize: 'cover' }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      draggable={draggable}
      onDragStart={(event) => {
        if (draggable) {
          event.dataTransfer.setData("text/plain", id);
        }
      }}
      onClick={handleClick} // Adăugăm evenimentul onClick
    >
      <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-blue-500 flex justify-center items-center">
        <h4>{health}</h4>
      </div>
      <div className="absolute top-0 right-0 h-12 w-12 rounded-full bg-green-600 flex justify-center items-center">
        <h4>{power}</h4>
      </div>
      <div className="flex items-center justify-center bg-white h-1/5">
        <h4 className="">{name}</h4>
      </div>
    </div>
  );
};

export default Card;
