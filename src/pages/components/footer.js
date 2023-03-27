import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
  //import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icon'

function Footer (){
    return(
    <div className="footer bg-light">
        <div className="container w-100 d-flex flex-column justify-content-center align-item-center">
        <ul className="list-inline text-center contact-info">
            <li className="list-inline-item ">
            <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li className="list-inline-item">
            <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li className="list-inline-item">
            <FontAwesomeIcon icon={faEnvelope} />
            </li>
        </ul>
        <p class="text-center copyright">
        VivaLaVida Designed by <a href="mailto:cjk123cjk@gmail.com" type="mail">Chiang.Kai Kspsss</a> ⓒ 2023 All Right Reserved | 個人作品練習
        </p>
        </div>
    </div>)
};
export default Footer;