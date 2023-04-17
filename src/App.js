//axios
import axios from 'axios';

//import logo from './assets/logo.svg';
//React Hook
import {useState , useEffect } from 'react';
//React Router
import { Routes,Route} from 'react-router-dom'
//React Component
import Layout from './pages/Layout.js';
import Navbar1 from './pages/Navbar01.js'
import Login  from './pages/Login.js'
import Dashboard  from './pages/admin/Dashboard.js'
import AdminProducts from './pages/admin/AdminProducts.js';
import AdminCoupons from './pages/admin/AdminCoupons.js';
import Cart from './pages/layout/Cart.js';
import Home from './pages/layout/Home.js';
import Products from './pages/layout/Products.js';
import ProductDetail from './pages/layout/ProductDetail.js';
import Checkout from './pages/layout/Checkout.js';
// Import Component
//scss
import './assets/scss/all.scss';
//Cart Context

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
function App() {
  useEffect(()=>{
    //console.log(process.env.REACT_APP_API_URL,process.env.REACT_APP_API_PATH);
    (async()=>{
     const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products/all`);
    // console.log(res);
    })();
  },[]);
  return (
    <div className='App'>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={<Dashboard/>}>
          <Route path="products" element={<AdminProducts/>}></Route>
          <Route path="coupons" element={<AdminCoupons/>}></Route>
        </Route>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}></Route>
          <Route path="products" element={<Products/>}></Route>
          <Route path="product/:id" element={<ProductDetail/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='checkout' element={<Checkout/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
