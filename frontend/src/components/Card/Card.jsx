import React, { useState } from "react";

const Card = ({ id, name, image_url, health, power, draggable, hoverEffect, isHighlighted, onHighlightCard, onAttack, opponentCards }) => {
   // Stări locale pentru efectul de hover și dropdown-ul pentru atac
  const [isHovered, setIsHovered] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

   // Funcție pentru gestionarea hover-ului
  const handleHover = () => {
    if (hoverEffect) {
      setIsHovered(!isHovered);
    }
  };

  // Funcție pentru gestionarea click-ului pe card pentru evidențiere
  const handleClick = () => {
    onHighlightCard(id);// Apelează funcția de evidențiere a cardului din componenta părinte
    setShowDropdown(!showDropdown); // Închide dropdown-ul după ce s-a efectuat atacul
  };

  const handleClickAttack = (opponentCardId, power) => {
    onAttack(id, opponentCardId, power);// Apelează funcția de atac din componenta părinte
    setShowDropdown(false); //Închide dropdown-ul după ce s-a efectuat atacul
  };

  //componenta carte care contine imaginea cartii, numele, mana si health-ul ei
  return (
    <div
      id={id}
      className={`h-[250px] w-[180px] relative border-2 border-black/20 transition-transform duration-100  rounded-md overflow-hidden${isHovered && hoverEffect ? "-translate-y-12 z-10" : ""} ${isHighlighted ? "brightness-100" : ""}`}
      style={{ backgroundImage: `url(${image_url})`, backgroundSize: 'cover' }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      draggable={draggable}
      onDragStart={(event) => {
        if (draggable) {
          event.dataTransfer.setData("text/plain", id);
        }
      }}
      onClick={handleClick}
    >
      <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-green-500 flex justify-center items-center">
        <h4>{health}</h4>
      </div>
      <div className="absolute top-0 right-0 h-12 w-12 rounded-full bg-blue-600 flex justify-center items-center">
        <h4>{power}</h4>
      </div>
      <div className="flex items-center justify-center bg-white h-1/5">
        <h4 className="">{name}</h4>
      </div>

      {showDropdown && (
        <div className="absolute top-12 left-0 bg-black border rounded shadow-lg">
          {opponentCards.map(opponentCard => (
            <div
              key={opponentCard.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleClickAttack(opponentCard.id, power)}
              style={{ color: 'white' }}
            >
              Attack {opponentCard.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
