
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000',{ transports : ['websocket']}); 

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Ascultă evenimentul de mesaj de la server
    socket.on('message', (data) => {
      console.log('Message from server:', data);
      setChat([...chat, data]);
    });

    return () => socket.disconnect(); // Deconectează socket-ul la demontarea componentei
  }, [chat]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('message', message); // Trimite mesajul la server
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black', marginBottom: '10px' }}>
        {chat.map((msg, index) => (
          <div key={index} style={{ padding: '5px', borderBottom: '1px solid gray' }}>{msg}</div>
        ))}
      </div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};


export default Chat;
