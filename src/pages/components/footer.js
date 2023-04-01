
import { Link } from "react-router-dom";
function Footer (){
    return(
    <div className="footer bg-light">
        <div className="container d-flex flex-column justify-content-center align-item-center">
        <ul className="d-flex w-100 justify-content-center  list-unstyled mb-0 h4">
              <li><a href="#" className="text-black mx-3"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="text-black mx-3"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#" className="text-black ms-3"><i className="fab fa-line"></i></a></li>
        </ul>
        <p className="text-center copyright">
        VivaLaVida Designed by <Link to={"/login"} type="link">Chiang.Kai Kspsss</Link> ⓒ 2023 All Right Reserved | 個人作品練習
        </p>
        </div>
    </div>)
};
export default Footer;