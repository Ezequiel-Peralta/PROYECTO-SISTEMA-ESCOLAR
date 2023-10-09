import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar=()=>{
    return(
        <header className={style.header}>
                <div  className={style.div1}>
                    <div className={style.img}>
                    </div>
                    <Link to="/">
                        <h2 className={style.t1}>INSTITUTO PRIVADO</h2>
                        <h2 className={style.t2}>DEAN FUNES</h2>
                    </Link>
                </div>
                <div className={style.div2}>
                    <ul className={style.nav}>    
                        <li className={style.menuOptions}><Link to="/home" ><button type="button" className={style.buttom}>INICIO</button></Link></li>
                        <li className={style.menuOptions}><Link to="/student"><button className={style.buttom}>ESTUDIANTES</button></Link>
                            <ul className={style.submenu}>
                                <li><Link to="/register" ><button type="button" className={style.buttomSubMenu}>Registrar</button></Link></li>
                                <li><Link to="/modify" ><button type="button" className={style.buttomSubMenu}>Modificar</button></Link></li>
                                <li><Link to="/grades"><button type="button" className={style.buttomSubMenu}>Notas</button></Link></li>
                                <li><Link to="/students"><button type="button" className={style.buttomSubMenu}>Total</button></Link></li>
                            </ul>
                        </li>
                        <li className={style.menuOptions}><Link to="/usuario"><button type="button" className={style.buttom}>ADMIN</button></Link>
                            <ul className={style.submenu}>
                                <li><Link to="/crear" ><button type="button" className={style.buttomSubMenu}>Registrar</button></Link></li>
                                <li><Link to="/editar" ><button type="button" className={style.buttomSubMenu}>Modificar</button></Link></li>
                                <li><Link to="/banned"><button type="button" className={style.buttomSubMenu}>Banear</button></Link></li>
                                <li><Link to="/alluser"><button type="button" className={style.buttomSubMenu}>Total</button></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
    )
}

export default NavBar