
import { Link,useHistory } from "react-router-dom";
import style from "./CrearUsuario.module.css"
import { useState } from "react";
import axios from "axios"
import FooterPag from "../../Footer/FooterPag";

const CrearUsuario=()=>{

    const history=useHistory()
    const [register,setRegister]= useState({
        nameStaff:"",
        lastNameStaff:"",
        dniStaff:0,
        userStaff:"",
        passwordStaff:""
        
    })

    const changeHandler=(event)=>{
    
        setRegister({...register,
        [event.target.name]:event.target.value,
    
        })
    }
   
        const submitHandler=()=>{
         
          //  console.log(register,"register");
            
        axios.post("http://localhost:3001/staff",register).then(res=>alert(res))
        history.push('/usuario')
    }

    //encType="multipart/form-data"
    return(
        <form onSubmit={submitHandler} className={style.divbody}>
            <div className={style.div1}> 
                <h1 className={style.title}>Registrar admin</h1>
                <div className={style.conteinerDivDivs}>
                    <div className={style.divLabelInput}>
                        <label htmlFor="nameStaff" className={style.label}>Nombre</label>
                        <input type="text" value={register.nameStaff} name="nameStaff" onChange={changeHandler}  className={style.input}/>
                    </div>
                    <div className={style.divLabelInput}>
                        <label htmlFor="lastNameStaff" className={style.label}>Apellido</label>
                        <input type="text" value={register.lastNameStaff} name="lastNameStaff" onChange={changeHandler}  className={style.input}/>
                    </div>
                    <div className={style.divLabelInput}>
                        <label htmlFor="dniStaff" className={style.label}>DNI</label>
                        <input type="number" value={register.dniStaff} name="dniStaff" onChange={changeHandler} className={style.input}/>
                    </div>
                    <div className={style.divLabelInput}>
                        <label htmlFor="userStaff" className={style.label}>Usuario</label>
                        <input type="text" value={register.userStaff} name="userStaff" onChange={changeHandler} className={style.input}/>
                    </div>
                    <div className={style.divLabelInput}>
                        <label htmlFor="passwordStaff" className={style.label}>Password</label>
                        <input type="number" value={register.passwordStaff} name="passwordStaff" onChange={changeHandler} className={style.input}/>
                    </div>
                </div>
            
                <div className={style.buttomDiv}>
                    <button type="submit" className={style.butom}>ENVIAR</button>
                    <Link to="/usuario"><button className={style.butom}>VOLVER</button></Link>
                </div>
            </div>
            <FooterPag/>
        </form>
    )
    /**
     * En React, las etiquetas <input> se consideran elementos vacíos y no deben tener contenido ni etiquetas de cierre.
    */
}
export default CrearUsuario

