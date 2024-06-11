import React, { useState, useEffect } from 'react';
import './style.css';
import endgameImage from './endgame.png'; // Importă imaginea

const EndPage = () => {
  const [volume, setVolume] = useState(100);
  const [isMainMenuVisible, setMainMenuVisibility] = useState(true);
  const [isSubMenuVisible, setSubMenuVisibility] = useState(false);
  const [isMenuInfoVisible, setMenuInfoVisibility] = useState(false);
  const [cardsPlayed, setCardsPlayed] = useState(69);
  const [dmgDealt, setDmgDealt] = useState(69);
  const [totalManaUsed, setTotalManaUsed] = useState(69);
  const [startTime, setStartTime] = useState(9999999999);

  const audioRef = React.createRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const updateStats = () => {
    // Acesta poate fi folosit pentru a actualiza alte state-uri în funcție de necesitate
  };

  return (
    <div className="bg-gray-500 h-screen w-screen flex justify-center" style={{backgroundImage: 'url(https://i.postimg.cc/3Rgqn0x6/endgame.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      <h1 className="Titlu">The game has ended!</h1>
      {isMainMenuVisible && (
        <div className="meniu" id="mainMenu">
          <h2><button onClick={() => (window.location.href = '/game')}>Rematch</button></h2>
          <h2><button onClick={() => setMenuInfoVisibility(true) & setMainMenuVisibility(false)}>Game info</button></h2>
          <h2><button onClick={() => setSubMenuVisibility(true) & setMainMenuVisibility(false)}>Option</button></h2>
          <h2><button onClick={() => (window.location.href = '/')}>Main menu</button></h2>
        </div>
      )}
      {isSubMenuVisible && (
        <div className="meniu" id="subMenu">
          <h1 className="optiuni_titlu">Options</h1>
          <h2><button className="volume">Volume:</button></h2>
          <input
            type="range"
            name="volume"
            id="vol"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
          <span className="num">{volume}</span>
          <audio ref={audioRef} autoplay className="aud" src="musicendgame.mp3"></audio>
          <h2><button onClick={() => setSubMenuVisibility(false) & setMainMenuVisibility(true)}>Back</button></h2>
        </div>
      )}
      {isMenuInfoVisible && (
        <div className="meniu" id="MenuInfo">
          <h1 className="optiuni_titlu">Game info:</h1>
          <ul>
            <li>Num. of cards used: {cardsPlayed}</li>
            <li>Dmg dealt: {dmgDealt}</li>
            <li>Total mana used: {totalManaUsed}</li>
            <li>Time played: {startTime}s</li>
          </ul>
          <button onClick={() => setMenuInfoVisibility(false) & setMainMenuVisibility(true)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default EndPage;
