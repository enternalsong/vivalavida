//axios
import axios from 'axios';

//import logo from './assets/logo.svg';
//React Hook
import {useState , useEffect } from 'react';
//React Component
import Home from './pages/home.js';
import Navbar1 from './pages/Navbar01.js'
// Import Component
import Cart from './pages/back/Cart.js';
import Productslist from './pages/back/Products.js';
import Navbar_Back from './pages/back/Navbar-back.js';
//scss
import './assets/scss/all.scss';
//Cart Context


function App() {
  useEffect(()=>{
    console.log("helloworld");
  },[]);
  return (
    <div className='App'>
        <Navbar1></Navbar1> 
    </div>
  );
}

export default App;
