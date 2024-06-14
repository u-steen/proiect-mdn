import React from "react";

//Componenta care reprezinta o bara de mana de maxim 20. Mana este folosita pentru toate actiunile playerului
const ManaBar = ({ mana }) => {
    const manaPercentage = (mana / 20) * 100;

    return (
        <div className="bg-gray-300 w-[140px] h-[20px] border border-gray-400 rounded-md overflow-hidden">
            <div className="bg-blue-500 h-full" style={{ width: `${manaPercentage}%` }}></div>
        </div>
    );
};

export default ManaBar;
