import React, { useState, useEffect } from 'react';
import './style.css'; // Importăm fișierul CSS pentru stilizare

const EndPage = () => {
  const [volume, setVolume] = useState(100); // Starea pentru volumul audio, inițial setat la 100
  const [isMainMenuVisible, setMainMenuVisibility] = useState(true); // Vizibilitatea meniului principal
  const [isSubMenuVisible, setSubMenuVisibility] = useState(false); // Vizibilitatea submeniului de opțiuni
  const [isMenuInfoVisible, setMenuInfoVisibility] = useState(false); // Vizibilitatea informațiilor despre joc
  const [cardsPlayed, setCardsPlayed] = useState(10); // Numărul de cărți jucate
  const [dmgDealt, setDmgDealt] = useState(14); // Daunele cauzate
  const [totalManaUsed, setTotalManaUsed] = useState(31); // Totalul de mana utilizat
  const [startTime, setStartTime] = useState(269); // Timpul începutului jocului

  const audioRef = React.createRef(); // Referință către elementul audio pentru controlul volumului

  useEffect(() => {
    // Efect secundar pentru setarea volumului audio
    if (audioRef.current) {
      audioRef.current.volume = volume / 100; // Setăm volumul audio în funcție de starea 'volume'
    }
  }, [volume]); // Efectul se activează când se schimbă starea 'volume'

  return (
    <div className="bg-gray-500 h-screen w-screen flex justify-center" style={{backgroundImage: 'url(https://i.postimg.cc/3Rgqn0x6/endgame.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      {/* Titlul paginii de final */}
      <h1 className="Titlu">The game has ended!</h1>

      {/* Meniul principal vizibil */}
      {isMainMenuVisible && (
        <div className="meniu" id="mainMenu">
          {/* Buton pentru reînceperea jocului */}
          <h2><button onClick={() => (window.location.href = '/game')}>Rematch</button></h2>
          {/* Buton pentru afișarea informațiilor despre joc */}
          <h2><button onClick={() => setMenuInfoVisibility(true) & setMainMenuVisibility(false)}>Game info</button></h2>
          {/* Buton pentru afișarea submeniului de opțiuni */}
          <h2><button onClick={() => setSubMenuVisibility(true) & setMainMenuVisibility(false)}>Option</button></h2>
          {/* Buton pentru revenirea la meniul principal */}
          <h2><button onClick={() => (window.location.href = '/')}>Main menu</button></h2>
        </div>
      )}

      {/* Submeniul de opțiuni vizibil */}
      {isSubMenuVisible && (
        <div className="meniu" id="subMenu">
          {/* Titlu pentru submeniul de opțiuni */}
          <h1 className="optiuni_titlu">Options</h1>
          {/* Control pentru volumul audio */}
          <h2><button className="volume">Volume:</button></h2>
          {/* Slider pentru ajustarea volumului */}
          <input
            type="range"
            name="volume"
            id="vol"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
          {/* Afișarea valorii volumului */}
          <span className="num">{volume}</span>
          {/* Element audio pentru redarea muzicii */}
          <audio ref={audioRef} autoPlay className="aud" src="musicendgame.mp3"></audio>
          {/* Buton pentru revenirea la meniul principal */}
          <h2><button onClick={() => setSubMenuVisibility(false) & setMainMenuVisibility(true)}>Back</button></h2>
        </div>
      )}

      {/* Afișarea informațiilor despre joc vizibilă */}
      {isMenuInfoVisible && (
        <div className="meniu" id="MenuInfo">
          {/* Titlu pentru secțiunea de informații despre joc */}
          <h1 className="optiuni_titlu">Game info:</h1>
          {/* Listă cu detalii despre joc */}
          <ul>
            <li>Num. of cards used: {cardsPlayed}</li>
            <li>Dmg dealt: {dmgDealt}</li>
            <li>Total mana used: {totalManaUsed}</li>
            <li>Time played: {startTime}s</li>
          </ul>
          {/* Buton pentru revenirea la meniul principal */}
          <button onClick={() => setMenuInfoVisibility(false) & setMainMenuVisibility(true)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default EndPage;
