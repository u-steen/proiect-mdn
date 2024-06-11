// Card.jsx
import React, { useState } from "react";

const Card = ({ id, name, image_url, health, power }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      id={id} // Adding unique id for each card
      className={`h-[250px] w-[180px] relative border-2 border-black/20 transition-transform duration-100 ${
        isHovered && "-translate-y-12 z-10"
      }`}
      style={{ backgroundImage: `url(${image_url})`, backgroundSize: 'cover' }} // Use the image_url prop
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      draggable // Allowing the card to be draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text/plain", id); // Setting the dragged card's id
      }}
    >
      <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-red-500 flex justify-center items-center">
        <h4>{health}</h4>
      </div>
      <div className="absolute top-0 right-0 h-12 w-12 rounded-full bg-orange-300 flex justify-center items-center">
        <h4>{power}</h4>
      </div>
      <div className="flex items-center justify-center bg-white h-1/5">
        <h4 className="">{name}</h4>
      </div>
    </div>
  );
};

export default Card;
