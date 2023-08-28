import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./Banned.module.css"
import FooterPag from "../../Footer/FooterPag";

const Banned=()=>{

    const dispatch=useDispatch()
    const [bannedUser, setBannerUser] = useState({
        idStaffTeacher: "",
        banned:"",
       
      });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/staffB", bannedUser).then((res) => alert(res));
    
      };

    const selectBanned=(e)=>{
        setBannerUser({
         ...bannedUser,
         banned:e.target.value
        })
       }
       const changeHandler = (e) => {
     
        setBannerUser({
          ...bannedUser,
          [e.target.name]: e.target.value,
        });
      };
   

    return(
        <form onSubmit={submitHandler} className={style.divbody}>
          <div className={style.divcontainer}>
              <h1 className={style.title}>Banear admin</h1>
              <div className={style.divLabelInput}>
                <label htmlFor="idStaffTeacher"  className={style.label}>ID</label>
                <input
                  type="text"
                  name="idStaffTeacher"
                  value={bannedUser.idStaffTeacher}
                  onChange={changeHandler}
                  className={style.input}
                  />
                  <select name="banned"  onChange={selectBanned} className={style.option}>
                  <option value="" className={style.option}>Elegir Opcion</option>
                  <option value="active" className={style.option}>Activo</option>
                  <option value="inactivo" className={style.option}>Inactivo</option>
                </select>
              </div>
              
              <div className={style.buttomDiv}>
              <button type="submit" className={style.butom}>ACEPTAR</button>
                <Link to="/usuario"><button className={style.butom}>VOLVER</button></Link>
                
              </div>
          </div>
          <FooterPag/>
        </form>
    )
}


export default Banned