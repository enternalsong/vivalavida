import LogoImg from "../../assets/images/logo192.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSuitcase,
  faBurger,
  faUser,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import {NavLink} from "react-router-dom";
function Navbar() {
  return (
    <>
      <div>
        <div>
          <nav className="navbar navbar-light topNavbar mb-2">
            <div className="container">
              <div className="d-inline-flex topNavbar-link ">
                <div className="icon-box">
                <NavLink
                  to='/'
                  className="nav-home icon-nav active router-link-active flex-column align-items-center">
                  <FontAwesomeIcon className="icon-in-bar-home" icon={faHome}    />
                  <div className="icon-text">首 頁</div>
                </NavLink>
                </div>
                <div className="icon-box">
                <NavLink to="/products" className="icon-nav icon-discount">
                  <FontAwesomeIcon className="icon-in-bar" icon={faBurger} />
                  <div className="icon-text">探索行程</div>
                </NavLink>
                </div>
              </div>

              <NavLink
                to="/"
                className="navbar-brand logo active router-link-active">
                <img className="brand-logo" src={LogoImg} />
              </NavLink>


              
                <div className="d-inline-flex topNavbar-link ">
                    <div className="icon-box">
                        <NavLink
                        to="/Detail"
                        className="icon-nav  active router-link-active">
                        <FontAwesomeIcon icon={faSuitcase}className="icon-in-bar"/>
                        <div className="icon-text">文章區</div>
                        </NavLink>
                    </div>
                    <div className="icon-box">
                        <NavLink to="/Login" className="icon-nav icon-discount">
                        <FontAwesomeIcon icon={faUser} className="icon-in-bar"/>
                        <div className="icon-text">登入</div>
                        </NavLink>
                    </div>
              </div>

            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Navbar;
