import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faSuitcase,faBurger,faUser} from '@fortawesome/free-solid-svg-icons'
function Navbar_Back(){
    return(
        <nav className="navbar bg-light fixed-top">
            <div className="container-fluid">
            <span className="navbar-brand">Kspsss</span>
            <a className="nav-link text-align-center">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="badge text-bg-danger rounded-pill  top-0 start-100 translate-middle" id="cart-dropdown" data-bs-toggle="dropdown" aria-expanded="false">2</span>    
            </a> 
            </div>
        </nav>
    )
}
export default Navbar_Back;