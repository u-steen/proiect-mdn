import React, { useState } from 'react';
import './style.css';

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
    <>
      <h1 className="Titlu">Ultimate Heinsenberg vs Goku card game</h1>
      {showMainMenu && (
        <div className="meniu" id="mainMenu">
          <h2><button >Start game</button></h2>
          <h2><button onClick={showSubMenuFunction}>Option</button></h2>
          <h2><button onClick={showSubMenu2Function}>Credits</button></h2>
          <h2><button>Exit game</button></h2>
        </div>
      )}

      {/* Submeniu pentru Option */}
      {showSubMenu && (
        <div className="meniu" id="subMenu">
          <h1 className="optiuni_titlu">Options</h1>
          <h2><button className="volume">Volume</button></h2>
          <input type="range" name="volume" id="vol" onChange={handleVolumeChange} />
          <span className="num">{volumeValue}</span>
          <audio className="aud" src="backgroundsound.mp3" autoPlay loop />
          <h2><button onClick={showSubMenuInvFunction}>Back</button></h2>
        </div>
      )}

      {/* Submeniu pentru Credits */}
      {showSubMenu2 && (
        <div className="meniu" id="subMenu2">
          <h1 className="credits_titlu">Credits</h1>
          <div className="dev">
            <h2>Developers</h2>
            <h4>Rădoi Dragoș Cosmin</h4>
            <h4>Avrămescu Isaac Sebastian</h4>
            <h4>Eșanu Iustin</h4>
            <h4>Vlaicu Alexandra</h4>
          </div>
          <h2><button onClick={showSubMenu2InvFunction}>Back</button></h2>
        </div>
      )}

    </>
  );
}

export default Homepage;