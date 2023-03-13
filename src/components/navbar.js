import LogoImg from '../assets/images/logo192.png'
import CartSvg from '../assets/images/cart-shopping-solid.svg'
const Navbar =() =>{
    
    return(
            <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="navbar-brandbox">
                <a className="navbar-brand" href="#">
                    <img className="brand-img" src={LogoImg}></img>
                </a>
                </div>
            <div className="container-sm">

                    <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-dropdown ">
                        <li className="nav-item">
                        <a className="nav-link active" href="#"><span className="d-block d-sm-inline">美食</span></a>
                        </li>
                        <li className="nav-item dropdown mr-auto">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        玩樂
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
                        <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">登入</a>
                        </li>
                        <li className="nav-item d-flex">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                            <span><img className="nav-cart-svg" src={CartSvg}></img></span>
                        </a>
                        </li>  
                    </ul>
                    </div>
                    </div> 
            </nav>
            </div>

    )
}
export default Navbar;