import React from "react";

export default function Botprofile({ bots }) {
  return (
    <>
      <h1>BotBattle</h1>
      <ul id="rows">
    
        {bots.map((bot) => (
          <li key={bot.id} className="bot">
            <img src={bot.avatar_url} alt="bot image" />
            <p>name: {bot.name}</p> 
            <p>health:{bot.health} </p>
            <p>damage:{bot.damage}</p>
            <p>armor:{bot.armor}</p>
            <p>bot_class:{bot.class}</p>
            <p>catchphrase:{bot.catchphrase}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
