import { useState } from "react" ;



export default function Botprofile(){  


 const [bot , setBot]= useState(0);
 
return(
<>
<h1>BotBatrl: {bot}</h1>
<button onClick={()=>setBot(+1)}>add</button>




</>

);

}