import axios from 'axios';
//import logo from './assets/logo.svg';
import {useState , useEffect } from 'react';
import Home from './home.js';
import './assets/all.scss';

function App() {
  useEffect(()=>{
    console.log("helloworld");
  },[]);
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
