import React, { useState, useEffect } from 'react';
import Botprofile from './components/Botprofile';

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBots(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>BotBattle App</h1>
      {bots.length > 0 ? (
        <Botprofile bots={bots} />
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
