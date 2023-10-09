import { Link } from "react-router-dom";
import style from "./Student.module.css"
import FooterPag from "../Footer/FooterPag";

const Student =()=>{

    return(
        <div className={style.divbody}>
            <div className={style.divconteiner}>
                <div className={style.div1}>
                    <h1>ESTUDIANTES</h1>
                </div>
                <div className={style.div2}>
                    <Link to="/register"><button>Registrar</button></Link>
                    <Link to="/modify"><button>Modificar</button></Link>
                    <Link to="/students"><button>Total</button></Link>
                    <Link to="/grades"><button>Notas</button></Link>
                </div>
            </div>
            <FooterPag/>
            
        </div>
    )
}
export default Student