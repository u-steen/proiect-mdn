import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Importăm fișierul CSS pentru stilizare

function Homepage() {
  // Stări locale pentru gestionarea vizibilității meniurilor și setării volumului
  const [showMainMenu, setShowMainMenu] = useState(true); // Vizibilitatea meniului principal
  const [showSubMenu, setShowSubMenu] = useState(false); // Vizibilitatea submeniului 'Option'
  const [showSubMenu2, setShowSubMenu2] = useState(false); // Vizibilitatea submeniului 'Credits'
  const [volumeValue, setVolumeValue] = useState(100); // Valoarea volumului audio

  // Funcție pentru gestionarea schimbării volumului audio
  const handleVolumeChange = (e) => {
    const audio = document.querySelector('.aud'); // Selectăm elementul audio
    const vol = e.target.value; // Obținem valoarea din slider
    audio.volume = vol / 100; // Setăm volumul audio
    setVolumeValue(vol); // Actualizăm starea pentru afișarea valorii volumului
  };

  // Funcții pentru afișarea și ascunderea submeniului 'Option'
  const showSubMenuFunction = () => {
    setShowSubMenu(true);
    setShowMainMenu(false);
  };

  const showSubMenuInvFunction = () => {
    setShowSubMenu(false);
    setShowMainMenu(true);
  };

  // Funcții pentru afișarea și ascunderea submeniului 'Credits'
  const showSubMenu2Function = () => {
    setShowSubMenu2(true);
    setShowMainMenu(false);
  };

  const showSubMenu2InvFunction = () => {
    setShowSubMenu2(false);
    setShowMainMenu(true);
  };

  return (
    <div className="bg-blue-600 h-screen w-screen flex justify-center" style={{backgroundImage: 'url(https://i.postimg.cc/VNNLy1CD/bg.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      {/* Titlul paginii de start */}
      <h1 className="text-center absolute top-10 text-4xl text-black">Ultimate Heinsenberg vs Goku card game!</h1>

      {/* Meniul principal */}
      {showMainMenu && (
        <div className="absolute top-1/2 left-1/2 bg-gray-800 bg-opacity-75 p-3 rounded-lg transform -translate-x-1/2 -translate-y-1/2 text-center" id="mainMenu" style={{ borderRadius: '20px' }}>
          {/* Buton pentru începerea jocului */}
          <h2><button className="w-60 h-20 text-2xl rounded-lg my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125"><Link to="/game">Start game</Link></button></h2>
          {/* Buton pentru afișarea submeniului 'Option' */}
          <h2><button className="w-60 h-20 text-2xl rounded-lg my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125" onClick={showSubMenuFunction}>Option</button></h2>
          {/* Buton pentru afișarea submeniului 'Credits' */}
          <h2><button className="w-60 h-20 text-2xl rounded-lg my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125" onClick={showSubMenu2Function}>Credits</button></h2>
          {/* Buton pentru ieșirea din joc (hypotetic) */}
          <h2><button className="w-60 h-20 text-2xl rounded-lg my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125">Exit game</button></h2>
        </div>
      )}

      {/* Submeniu 'Option' */}
      {showSubMenu && (
        <div className="absolute top-1/2 left-1/2 bg-gray-800 bg-opacity-75 p-3 rounded-lg transform -translate-x-1/2 -translate-y-1/2 text-center" id="subMenu" style={{ borderRadius: '20px' }}>
          {/* Titlu pentru submeniu */}
          <h1 className="text-white" style={{ fontSize: '35px' }}>Options</h1>
          {/* Buton pentru ajustarea volumului */}
          <h2><button className="w-60 h-20 text-2xl rounded-lg my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125">Volume</button></h2>
          {/* Slider pentru volum */}
          <input type="range" name="volume" id="vol" onChange={handleVolumeChange} />
          {/* Afișarea valorii volumului */}
          <span className="text-white text-2xl">{volumeValue}</span>
          {/* Element audio pentru fundal */}
          <audio className="aud" src="backgroundsound.mp3" autoPlay loop />
          {/* Buton pentru revenirea la meniul principal */}
          <h2><button className="w-60 h-20 text-2xl rounded-lg my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125" onClick={showSubMenuInvFunction}>Back</button></h2>
        </div>
      )}

      {/* Submeniu 'Credits' */}
      {showSubMenu2 && (
        <div className="absolute top-1/2 left-1/2 bg-gray-800 bg-opacity-75 p-3 rounded-lg transform -translate-x-1/2 -translate-y-1/2 text-center" id="subMenu2" style={{ borderRadius: '20px' }}>
          {/* Titlu pentru submeniu */}
          <h1 className="text-white" style={{ fontSize: '35px' }}>Credits</h1>
          {/* Secțiune pentru dezvoltatori */}
          <div className="text-red-600" style={{ fontSize: '20px' }}>
            <h2>Developers</h2>
            <h4>Rădoi Dragoș Cosmin</h4>
            <h4>Avrămescu Isaac Sebastian</h4>
            <h4>Eșanu Iustin</h4>
            <h4>Vlaicu Alexandra</h4>
          </div>
          {/* Buton pentru revenirea la meniul principal */}
          <h2><button className="w-60 h-20 text-2xl rounded-lg my-2 transform transition-transform duration-300 ease-in-out hover:scale-100 hover:scale-y-125" onClick={showSubMenu2InvFunction}>Back</button></h2>
        </div>
      )}
    </div>
  );
}

export default Homepage;
