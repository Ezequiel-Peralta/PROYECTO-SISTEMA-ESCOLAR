
import style from "./FooterPag.module.css"
import logoImage from "../Home/logo.png";
import locationImage from "../Home/location.png";
import phoneImage from "../Home/phone.png";
import emailImage from "../Home/email.png";

const FooterPag = () =>{
    return(
        <div className={style.footer}>
            <img src={logoImage}  alt="Logo institucional" className={style.logofooter}></img>
            <div className={style.footericons}>
            <a href="" className={style.icon}><img src={locationImage} alt="Location" /></a>
            <a href="" className={style.icon}><img src={phoneImage} alt="Phone" /></a>
            <a href="" className={style.icon}><img src={emailImage} alt="Email" /></a>
            </div>
            <ul className={style.footermenu}>
                <li className={style.menuitem}><a href="#">Dirección</a></li>
                <li className={style.menuitem}><a href="#">Contacto</a></li>
                <li className={style.menuitem}><a href="#">Correo</a></li>
            </ul>
            <hr className={style.hr}></hr>
            <span className={style.footerCopyright}>
                <p></p>
            </span>
        </div>
    )
}

export default FooterPag