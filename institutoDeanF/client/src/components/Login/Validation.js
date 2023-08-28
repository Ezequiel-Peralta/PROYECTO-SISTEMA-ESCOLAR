const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

 const Validation = (userData) => {
  
  let errors={}
 if (!regexEmail.test(userData.username) ){
   errors.username=" Debe ingresar un E-mail valido";
 }
 if (!userData.username) {
   errors.username="Este campo no puede estar vacio ";
 }
 
 if (!userData.password.match(/\d/)) {
   errors.password="Debe que tener al menos un número"
   }
 if(userData.password.length<6 || userData.password.length>10){
  errors.password="La contraseña debe tener entre 6 y 10 caracteres"
 }
 return errors
};
export default Validation