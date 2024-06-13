import React from "react";

//Componenta care reprezinta o bara de health de maxim 20
const Healthbar = ({ health }) => {
    const healthPercentage = (health / 20) * 100;

    return (
        <div className="bg-gray-300 w-[140px] h-[20px] border border-gray-400 rounded-md overflow-hidden">
            <div className="bg-green-500 h-full" style={{ width: `${healthPercentage}%` }}></div>
        </div>
    );
};

export default Healthbar;
