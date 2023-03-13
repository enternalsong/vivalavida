import LogoImg from '../../assets/images/logo192.png'
import CartSvg from '../../assets/images/cart-shopping-solid.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faSuitcase,faBurger,faUser} from '@fortawesome/free-solid-svg-icons'
function Navbar (){
    return(
            <>
            <div className="outside-container">
                <div>
                    <nav className="navbar navbar-light fixed-top">
                        <div className="navbar-brandbox">
                        <a className="navbar-brand" href="#">
                            <img className="brand-img" src={LogoImg}></img>
                        </a>
                        </div>

                            <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-dropdown ">
                                <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <FontAwesomeIcon icon={faBurger} />
                                    美食
                                    </a>
                                </li>
                                <li className="nav-item dropdown mr-auto">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faSuitcase} />
                                    玩樂行程
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">景點</a></li>
                                    <li><a className="dropdown-item" href="#">觀光行程</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">更多</a></li>
                                </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav navbar-end">
                                <li className="nav-item">
                                <a className="nav-link d-flex " href="#" tabIndex="-1" aria-disabled="true" >
                                    <FontAwesomeIcon icon={faUser} />
                                    <span className="d-block">登入</span>
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-align-center">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                        <span className="badge text-bg-danger rounded-pill  top-0 start-100 translate-middle" id="cart-dropdown" data-bs-toggle="dropdown" aria-expanded="false">2</span>
                                    
                                    </a>      
                                <div className="dropdown-menu dropdown-menu-right text-center" id="cart-dropdown" aria-labelledby="cart-dropdown">
                                    <h5></h5>   
                                    <div className="cart-scroll">
                                        <table className="itemContent">
                                        </table>
                                    </div>

                                    <div className="totalInfo">
                                        <p>小計
                                            <span className="text-info h4 ml-5">$57000</span>
                                        </p>
                                    </div>
                                </div>
                                </li>  
                            </ul>
                            </div>
                        </nav>
                </div>
                <div className="123455">
                4343

                </div>
            </div>
            </>
    )
}
export default Navbar;