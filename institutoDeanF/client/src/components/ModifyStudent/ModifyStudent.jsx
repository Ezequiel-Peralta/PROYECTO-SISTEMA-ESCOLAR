import style from "./Modify.module.css";
import React, { useEffect,useState } from "react";
import axios from "axios";
import FooterPag from "../Footer/FooterPag";
import { Link } from "react-router-dom";

const ModifyStudent = () => {
  const [user,setUser]=useState()
  const [userAux,setUserAux]=useState({
    nameUser:"",
    passwordUser:""
  })
  

  const [formModify, setFormModify] = useState({
    id: "",
    name: "",
    lastName: "",
    dni: 0,
    birthDate: "",
    email: "",
    phone: "",
    image: "",
  });
   
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/student", formModify)
      .then((res) => alert(res));

  };

  const handleImageUpload = (event) => {
    //console.log(event.target.files, "event.target.files")
    const imageFile = event.target.files[0];
    console.log(event.target.files[0], "esto es event.target.files[0]");
    setFormModify({ ...formModify, image: imageFile });
    const imageURL = URL.createObjectURL(imageFile); // Generar la URL de la imagen
    setFormModify((prevRegister) => ({ ...prevRegister, imageURL }));
  };

  const changeHandler = (e) => {
   
    setFormModify({
      ...formModify,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(async()=>{
    const users = await axios.get("http://localhost:3001/staff") 
    const data=users.data 
    setUser(data)
  },[])
  const changeHandlerUser =(e)=>{
    setUserAux({
      
      ...userAux,
      [e.target.name]: e.target.value,
    })
    
  }
  const comprobationUser=()=>{
   // console.log(user[0].nameStaff,"user[i].nameStaff")
    //console.log(userAux.nameUser,"userAux.nameUser")
    for (let i = 0; i < user.length; i++) {
      if(user[i].nameStaff===userAux.nameUser && user[i].passwordStaff=== userAux.passwordUser&&user[i].banned==="active"){
       // console.log(user[i].nameStaff, userAux.nameUser ,"esto es user = user name");
       let forCrear=document.getElementById("divCrear")
       if(forCrear.classList.contains(style.hidden)){

         forCrear.classList.remove(style.hidden)
       }
       return alert("Usuario habilitado")
      }
    
    }
    return alert("Usuario Deshabiliatado")
    
  }

  return (
        <form encType="multipart/form-data" onSubmit={submitHandler} className={style.divbody}>
        <div  className={style.divcontainer}>
          <div>
          <h1 className={style.title}>Modificar estudiante</h1>
          </div>
          <div className={style.divValidar}>
            <label className={style.label}>Ingresar usuario</label>
            <input  type="text" name="nameUser" value={userAux.nameUser}  onChange={changeHandlerUser} className={style.input}/>
            <label className={style.label}>Ingresar contraseña</label>
            <input type="text" name="passwordUser" value={userAux.passwordUser}  onChange={changeHandlerUser} className={style.input} />
            <button onClick={comprobationUser} className={style.buttomSend}>Chequear </button>
          </div>
          <div className={style.conteinerDivDivs}>
            <div className={style.divLabelInput}>
              <label htmlFor="id"  className={style.label}>ID</label>
              <input
                type="text"
                name="id"
                value={formModify.id}
                onChange={changeHandler}
                className={style.input}
                />
              
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="name" className={style.label}>Nombre</label>
              <input
                type="text"
                name="name"
                value={formModify.name}
                onChange={changeHandler}
                className={style.input}
                />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="lastName" className={style.label}>Apellido</label>
              <input
                type="text"
                name="lastName"
                value={formModify.lastName}
                onChange={changeHandler}
                className={style.input}
              />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="dni" className={style.label}>DNI</label>
              <input
                type="number"
                name="dni"
                value={formModify.dni}
                onChange={changeHandler}
                className={style.input}
                />
             
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="birthDate" className={style.label}>Fecha de nacimiento</label>
              <input
                type="text"
                name="birthDate"
                value={formModify.birthDate}
                onChange={changeHandler}
                className={style.input}
                />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="email" className={style.label}>Email</label>
              <input
                type="text"
                name="email"
                value={formModify.email}
                onChange={changeHandler}
                className={style.input}
              />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="phone" className={style.label}>Telefono</label>
              <input
                type="text"
                name="phone"
                value={formModify.phone}
                onChange={changeHandler}
                className={style.input}
                />
            </div>
            <div className={style.divLabelInput}>
              <label htmlFor="image" className={style.label}>Image</label>
              <input
                type="file"
                name="image"
                value={formModify.image}
                onChange={handleImageUpload}
                className={style.input}
                />
            </div>
          </div>
          <div className={style.buttomDiv}>

           
              <div  id="divCrear" className={style.hidden}>
            <button type="submit" className={style.buttomSend}>ACEPTAR</button>
              </div>

          <Link to="student"><button className={style.buttomSend}>VOLVER</button></Link>
          
          </div>
          <FooterPag/>
          
        </div>
        </form>
   
  
  );
};

export default ModifyStudent;
