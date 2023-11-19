import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Botprofile from './components/Botprofile';


function App(){
  const[bots ,setBot]= useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/bots")
    .then (response=>response.json())
    .then (data=>{
      console.log(data)
      setBot(data)  
    })
  }, [] )
   
    

  return (
<>
<Botprofile
name=" "
health=""
damage=""
avatar-url=""

/>


</>
 )
  }



export default App;





