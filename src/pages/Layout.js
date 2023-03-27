import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import ArticeWall from "./components/ArticeWall.js";
import {Outlet} from "react-router-dom"
function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      {<Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
}
export default Layout;
