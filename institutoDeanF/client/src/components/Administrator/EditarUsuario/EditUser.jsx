import React, { useState } from "react";
import axios from "axios";
import style from "./EditUser.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FooterPag from "../../Footer/FooterPag";

const EditUser=()=>{
   
const dispatch=useDispatch()
    const [formModify, setformModify] = useState({
        idStaffTeacher: "",
        nameStaff: "",
        lastNameStaff: "",
        dniStaff: 0,
        userStaff: "",
        passwordStaff: "",
        banned:"",
       
      });

      const submitHandler = (e) => {
        e.preventDefault();
        axios
          .put("http://localhost:3001/staff", formModify)
          .then((res) => alert(res));
    
      };
    
      const changeHandler = (e) => {
     
        setformModify({
          ...formModify,
          [e.target.name]: e.target.value,
        });
      };
   
     

    return(
        <form onSubmit={submitHandler} className={style.divbody}>
          <div  className={style.divcontainer}>
            <div>
              <h1 className={style.title}>Modificar admin</h1>
            </div>
            <div className={style.conteinerDivDivs}>
              <div className={style.divLabelInput}>
                <label htmlFor="idStaffTeacher"  className={style.label}>ID</label>
                <input
                  type="text"
                  name="idStaffTeacher"
                  value={formModify.idStaffTeacher}
                  onChange={changeHandler}
                  className={style.input}
                  />
              </div>
              <div className={style.divLabelInput}>
                <label htmlFor="nameStaff" className={style.label}>Nombre</label>
                <input
                  type="text"
                  name="nameStaff"
                  value={formModify.nameStaff}
                  onChange={changeHandler}
                  className={style.input}
                  />
              </div>
              <div className={style.divLabelInput}>
                <label htmlFor="lastNameStaff" className={style.label}>Apellido</label>
                <input
                  type="text"
                  name="lastNameStaff"
                  value={formModify.lastNameStaff}
                  onChange={changeHandler}
                  className={style.input}
                />
              </div>
              <div className={style.divLabelInput}>
                <label htmlFor="dniStaff" className={style.label}>DNI</label>
                <input
                  type="number"
                  name="dniStaff"
                  value={formModify.dniStaff}
                  onChange={changeHandler}
                  className={style.input}
                  />
              </div>
              <div className={style.divLabelInput}>
                <label htmlFor="userStaff" className={style.label}>Usuario</label>
                <input
                  type="text"
                  name="userStaff"
                  value={formModify.userStaff}
                  onChange={changeHandler}
                  className={style.input}
                  />
              </div>
              <div className={style.divLabelInput}>
                <label htmlFor="passwordStaff" className={style.label}>Password</label>
                <input
                  type="password"
                  name="passwordStaff"
                  value={formModify.passwordStaff}
                  onChange={changeHandler}
                  className={style.input}
                />
              </div>
              
            </div>
            <div className={style.buttomDiv}>
              <button type="submit" className={style.buttom}>ACEPTAR</button>
              <Link to="/banned"><button className={style.buttom}>BANEAR/DESBANEAR</button></Link>
              <Link to="/usuario"><button className={style.buttom}>VOLVER</button></Link>
            </div>
          </div>
          <FooterPag/>
        </form>
   
    )

}

export default EditUser