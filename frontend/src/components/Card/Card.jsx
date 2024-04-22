import React, { useState } from "react";

const Card = ({ name, image_url, health, power }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div
      className={`h-[250px] w-[180px] bg-green-800 relative border-2 border-black/20 transition-transform duration-100 ${
        isHovered && "-translate-y-24 z-10"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-red-500 flex justify-center items-center">
        <h4>{health}</h4>
      </div>
      <div className="absolute top-0 right-0 h-12 w-12 rounded-full bg-orange-300 flex justify-center items-center">
        <h4>{power}</h4>
      </div>
      <div className="h-4/5 w-fill bg-blue-400"></div>
      <div className="flex items-center justify-center bg-white h-1/5">
        <h4 className="">{name}</h4>
      </div>
    </div>
  );
};

export default Card;
