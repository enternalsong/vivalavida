import LogoImg from "../../assets/images/logo192.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouse,
  faSuitcase,
  faUser,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [scrollY_over, setScrooly_over] = useState(false);
  useEffect(() => {
    const scrollEvent = () => {
      //console.log("scroll", window.scrollY);
      if (window.scrollY >= 80) {
        setScrooly_over(true);
      } else {
        setScrooly_over(false);
      }
    };
    window.addEventListener("scroll", scrollEvent);

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);
  return (
    <>
      <div>

          <nav
            className={
              scrollY_over
                ? "navbar navbar-light topNavbar fixed-top   bg-white mb-4 "
                : "navbar navbar-light topNavbar  fixed-top mb-4"
            }>
              <div className="container">
            <div className="d-inline-flex topNavbar-link">

                <NavLink
                  to="/"
                  className="nav-home icon-nav ">
                  <FontAwesomeIcon icon={ faHouse}/>

                  <div className="icon-text">首 頁</div>
                </NavLink>


                <NavLink to="/products" className="icon-nav icon-end">
                  <FontAwesomeIcon icon={ faSuitcase}/>

                  <div className="icon-text">探索行程</div>
                </NavLink>
            </div>

            <NavLink
              to="/"
              className="navbar-brand logo active router-link-active">
              VivaLaVida
            </NavLink>
            <div className="d-inline-flex topNavbar-link ">
   
                <NavLink
                  to="/detail"
                  className="icon-nav  active router-link-active">
                  <FontAwesomeIcon icon={ faClipboardList}/>

                  <div className="icon-text">產品詳細</div>
                </NavLink>

                <NavLink to="/login" className="icon-nav icon-end">
                  <FontAwesomeIcon icon={ faUser}/>
                  <div className="icon-text">登入</div>
                </NavLink>

            </div>
            </div>
          </nav>

      </div>
    </>
  );
}
export default Navbar;
