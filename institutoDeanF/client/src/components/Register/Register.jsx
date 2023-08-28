import { useHistory } from "react-router-dom";
import style from "./Register.module.css";
import { useState } from "react";
import axios from "axios";
import FooterPag from "../Footer/FooterPag";
import { Link } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [register, setRegister] = useState({
    name: "",
    lastName: "",
    dni: 0,
    birthDate: "",
    email: "",
    phone: 0,
    image: "",
  });

  const changeHandler = (event) => {
    setRegister({
      ...register,

      [event.target.name]: event.target.value,
    });
  };
  const handleImageUpload = (event) => {
    //console.log(event.target.files, "event.target.files")
    const imageFile = event.target.files[0];
    console.log(event.target.files[0], "esto es event.target.files[0]");
    setRegister({ ...register, image: imageFile });
    const imageURL = URL.createObjectURL(imageFile); // Generar la URL de la imagen
    setRegister((prevRegister) => ({ ...prevRegister, imageURL }));
  };


  const submitHandler = (event) => {
    event.preventDefault();
   // console.log(register, "esto es el register enviado");
    axios
      .post("http://localhost:3001/student", register)
      .then((res) => alert(res));
    history.push("/");
  };

  return (
    <form onSubmit={submitHandler} className={style.divbody} encType="multipart/form-data">
      <div className={style.divcontainer}>
        <h1 className={style.title}>Registrar estudiante</h1>
        <div className={style.conteinerDivDivs}>
          <div className={style.divLabelInput}>
            <label htmlFor="dni" className={style.label}>
              DNI
            </label>
            <input
              type="text"
              value={register.dni}
              name="dni"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="name" className={style.label}>
              Nombre
            </label>
            <input
              type="text"
              value={register.name}
              name="name"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="lastName" className={style.label}>
              Apellido
            </label>
            <input
              type="text"
              value={register.lastName}
              name="lastName"
              onChange={changeHandler}
              className={style.input}
            />
          </div>

          <div className={style.divLabelInput}>
            <label htmlFor="birthDate" className={style.label}>
              Fecha de nacimiento
            </label>
            <input
              type="text"
              value={register.birthDate}
              name="birthDate"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="email" className={style.label}>
              E-mail
            </label>
            <input
              type="text"
              value={register.email}
              name="email"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="phone" className={style.label}>
              Telefono
            </label>
            <input
              type="number"
              value={register.phone}
              name="phone"
              onChange={changeHandler}
              className={style.input}
            />
          </div>
          <div className={style.divLabelInput}>
            <label htmlFor="image" className={style.label}>
              Image
            </label>
            <input
              type="file"
              value={register.image}
              name="image"
              onChange={handleImageUpload}  
              className={style.input}
            />
          </div>
        </div>
        <div className={style.buttomDiv}>

          <button type="submit" className={style.butom}>
            ACEPTAR
          </button>
          <Link to="student"><button className={style.butom}>VOLVER</button></Link>
        </div>
      </div>
      <FooterPag />
    </form>
  );

  /**
   * En React, las etiquetas <input> se consideran elementos vacíos y no deben tener contenido ni etiquetas de cierre.
   */
};

export default Register;
