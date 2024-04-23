import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Homepage() {
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [volumeValue, setVolumeValue] = useState(100);

  const handleVolumeChange = (e) => {
    const audio = document.querySelector('.aud');
    const vol = e.target.value;
    audio.volume = vol / 100;
    setVolumeValue(vol);
  };

  const showSubMenuFunction = () => {
    setShowSubMenu(true);
    setShowMainMenu(false);
  };

  const showSubMenuInvFunction = () => {
    setShowSubMenu(false);
    setShowMainMenu(true);
  };

  const showSubMenu2Function = () => {
    setShowSubMenu2(true);
    setShowMainMenu(false);
  };

  const showSubMenu2InvFunction = () => {
    setShowSubMenu2(false);
    setShowMainMenu(true);
  };
  
  return (
    <div class="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('./bg.png')"}}>
      <h1 className="text-center text-4xl text-white">Ultimate Heinsenberg vs Goku card game</h1>
      {showMainMenu && (
        <div className="absolute top-1/2 left-1/2 bg-black bg-opacity-60 p-3 rounded transform -translate-x-1/2 -translate-y-1/2 text-center" id="mainMenu">
          <h2><button className="w-60 h-20 text-2xl rounded my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125"><Link to="/game">Start game</Link></button></h2>
          <h2><button className="w-60 h-20 text-2xl rounded my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125" onClick={showSubMenuFunction}>Option</button></h2>
          <h2><button className="w-60 h-20 text-2xl rounded my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125" onClick={showSubMenu2Function}>Credits</button></h2>
          <h2><button className="w-60 h-20 text-2xl rounded my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125">Exit game</button></h2>
        </div>
      )}

      {/* Submeniu pentru Option */}
      {showSubMenu && (
        <div className="absolute top-1/2 left-1/2 bg-black bg-opacity-60 p-3 rounded transform -translate-x-1/2 -translate-y-1/2 text-center" id="subMenu">
          <h1 className="text-white" style={{ fontSize: '35px' }}>Options</h1>
          <h2><button className="w-60 h-20 text-2xl rounded my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125">Volume</button></h2>
          <input type="range" name="volume" id="vol" onChange={handleVolumeChange} />
          <span className="text-white text-2xl">{volumeValue}</span>
          <audio className="aud" src="backgroundsound.mp3" autoPlay loop />
          <h2><button className="w-60 h-20 text-2xl rounded my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125" onClick={showSubMenuInvFunction}>Back</button></h2>
        </div>
      )}

      {/* Submeniu pentru Credits */}
      {showSubMenu2 && (
        <div className="absolute top-1/2 left-1/2 bg-black bg-opacity-60 p-3 rounded transform -translate-x-1/2 -translate-y-1/2 text-center" id="subMenu2">
          <h1 className="text-white" style={{ fontSize: '35px' }}>Credits</h1>
          <div className="text-red-600" style={{ fontSize: '20px' }}>
            <h2>Developers</h2>
            <h4>Rădoi Dragoș Cosmin</h4>
            <h4>Avrămescu Isaac Sebastian</h4>
            <h4>Eșanu Iustin</h4>
            <h4>Vlaicu Alexandra</h4>
          </div>
          <h2><button className="w-60 h-20 text-2xl rounded my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125" onClick={showSubMenu2InvFunction}>Back</button></h2>
        </div>
      )}
    </div>
  );
}

export default Homepage;