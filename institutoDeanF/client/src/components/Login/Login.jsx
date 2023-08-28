import Validation from "./Validation"
import { useState, useEffect } from "react";
import style from "./Login.module.css"
import userIcon from "../Home/user_icon.png";
import passwordIcon from "../Home/password_icon.png";

const Login=({ login })=>{
    const [userData, setUserData] = useState({
        username: "",
        password: "",
      });
      const [errors, setErrors] = useState({
        username: "",
        password: "",
      });
      
  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(Validation({// le paso todo a medida que la persona va a escribiendo
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  useEffect(() => {
    Validation(userData);
  }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };



return(
  <form onSubmit={handleSubmit} className={style.form}>
  <div className={style.conteinerFormLogin}>
    <div className={style.formLogin}>
      <div className={style.div}>
        <label className="lblForm" htmlFor="username"> Usuario</label><br />
        <div className={style.div2}>
          <img src={userIcon} alt="User icon" className={style.userIcon}></img>
          <input className="inputForm" onChange={handleInputChange} value={userData.username} name="username" type="text" maxLength="35"/> <br /> <br />
        </div>
        {errors.username && <p className="pError">{errors.username}</p>}
      </div>
      <div className={style.div}>
        <label className="lblForm" htmlFor="password"> Contraseña</label><br />
        <div className={style.div2}>
          <img src={passwordIcon} alt="Password icon" className={style.passwordIcon}></img>
          <input className="inputForm"onChange={handleInputChange} value={userData.password}name="password"type="text" /> <br /> <br />
        </div>
        {errors.password && <p className="pError">{errors.password}</p>} <br />
      </div>
      <button className={style.btnForm}>ACCEDER</button>
    </div>
  </div>
</form>
)




}

export default Login