import logo from './logo.svg';
import './App.css';
import { usestate ,useEffect } from 'react';
import Boltprofile from './components/boltprofile';


function App(){

  return (
<>
<Boltprofile
name=" "
health=""
damage=""
avatar-url=""

/>








</>

  )
  
  
   
  
}

export default App;

function Bolt(){
fetch("http://localhost:3000/bots")
.then (response=>response.json()
.then (data=>{
  console.log(data)
}))


}
