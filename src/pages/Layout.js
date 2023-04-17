import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import ArticeWall from "./components/ArticeWall.js";
import {Outlet} from "react-router-dom"
import { useState,useEffect } from "react";
import axios from "axios";
function Layout() {
  const [cartData,setCartData] = useState({});
  const getCart = async()=>{
    try{
      const res = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/cart`);
      console.log("購物車內容",res);
      setCartData(res.data.data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getCart();
  },[])
  return (
    <div>
      <Navbar cartData={cartData}></Navbar>
      {<Outlet context={{getCart,cartData}}></Outlet>}
      <Footer></Footer>
    </div>
  );
}
export default Layout;
