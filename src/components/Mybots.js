
function Mybots({ myBots, addToMyBots }) {
  return (
    <div>
      <h2>My collection</h2>
      <ul id="my-collection">
        {myBots.map((bot) => (
          <li key={bot.id} className="newbots">
            <img src={bot.avatar_url} alt="bot avatar" id="mybots" />
            <p>Name: {bot.name}</p>
            <p>Health: {bot.health}</p>
            <p>Armor: {bot.armor}</p>
            <p>Damage: {bot.damage}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <button onClick={() => addToMyBots(bot)}>Add to My Bots</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mybots;


 
    
    
    



