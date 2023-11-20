import React, { useState, useEffect } from 'react';
import Botprofile from './components/Botprofile';
import Mybots from './components/Mybots';
function App() {
  const [bots, setBots] = useState([]);
  const [ myBots, setMybots]=useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/ngendor00t/phase-2-bolt/bots")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBots(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

 const addToMyBots = ((bot)=>{
  if(!myBots.some(myBot => myBot.id === bot.id)){
    setMybots([...myBots, bot])


  }
 } )



  return (
    <div>
      <h1>BotBattle App</h1>
      <myBots myBots={myBots} addToMyBots={addToMyBots} />
       
       {bots.length > 0 ? (
        <Botprofile bots={bots}  addToMyBots={addToMyBots}/>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
