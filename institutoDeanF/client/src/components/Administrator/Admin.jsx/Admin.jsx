import { Link } from "react-router-dom";
import style from "./Admin.module.css"
import FooterPag from "../../Footer/FooterPag";
import CrearUsuario from "../CrearUsuario/CrearUsuario";
// import Banned from "../Banned/Banned";
// import EditUser from "../EditarUsuario/EditUser";


const Admin =()=>{

 const BtnCrearClick=()=> {
    let formCrear = document.getElementById("divCrear");

   
        formCrear.classList.remove(style.hidden);
    
}
// const BtnCrearClick2=()=> {
//     let formCrear2 = document.getElementById("divCrear2");
//         formCrear2.classList.remove(style.hidden2);
    
// }
// const BtnCrearClick3=()=> {
//     let formCrear3 = document.getElementById("divCrear3");

    
//         formCrear3.classList.remove(style.hidden3);
    
// }
return(
    <div className={style.divbody}>
        <div className={style.divconteiner}>
            <div className={style.div1}>
                <h1>ADMINISTRADOR</h1>
            </div>
            <div className={style.div2}>
                {/*<button onClick={BtnCrearClick} >Crear</button>*/}
                {/* <button onClick={BtnCrearClick2}>Editar</button> */}
                {/* <button onClick={BtnCrearClick3} >Banned</button> */}
                <Link to="/crear"><button>Crear</button></Link>
                <Link to="/editar"><button>Editar</button></Link>
                <Link to="/banned"><button>Bannear</button></Link>
                <Link to="/alluser"><button>Todos</button></Link>
            </div>
            {/*<div className={style.hidden} id="divCrear">
                <CrearUsuario/>
            </div> */}

            {/* <div className={style.hidden2} id="divCrear2">
                <EditUser/>
            </div> */}

            {/* <div className={style.hidden3} id="divCrear3">
                <Banned/>
            </div> */}

           

        </div>
        <FooterPag/>
        
    </div>
)
}

export default Admin