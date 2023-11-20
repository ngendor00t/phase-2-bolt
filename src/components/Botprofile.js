import React from "react";

export default function Botprofile({ bots , addToMyBots }) {
  return (
    <>
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
            <button onClick={() => addToMyBots(bot)}>Add to my Bots</button>
          </li>
        ))}
      </ul>
    </>
  );
}
