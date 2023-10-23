
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import style from "./LoadGrades.module.css"
import FooterPag from "../Footer/FooterPag";

const LoadGrades=()=>{
const {id}=useParams()
const [dataStudent,setDataStudent]=useState({})
const [loadGrades, setLoadGrades] = useState({
    grades: [],
   // recovery: "",
    finalGrades: "",
    nameSubject: "",
    idStudent:""
  });


useEffect(()=>{
    
axios.get(`http://localhost:3001/student/student/${id}`)
.then ((data)=>{
     console.log(data.data.id,"esto es data.data.id");
     setDataStudent(data.data)
     setLoadGrades({ ...loadGrades, idStudent: data.data.id}) 
   
})
},[id])


const loadGradesStudent = (index, event) => {
      const newGrades = [...loadGrades.grades];
      newGrades[index] = event.target.value;
      setLoadGrades({ ...loadGrades, grades: newGrades});
  }

  const loadDataStudent = (e)=>{
    setLoadGrades({
      ...loadGrades,
      [e.target.name]: e.target.value})
  }
  
  const sendGrades=()=>{
    axios
      .post("http://localhost:3001/newGrades", loadGrades)
      .then(alert("Datos enviados"));
  }
  

return(
    <div className={style.divcontainer}>
        <div className={style.titleANDname}>
            <h1 className={style.title}>CARGA DE NOTAS DE: <span>{dataStudent.name + " " + dataStudent.lastName}</span></h1>
        </div>
        <div className={style.containerImgandLabel}>
            <div className={style.contenedor}>
                <div className={style.formGroup}>
                  <label className={style.label}>DNI: </label>
                  <p className={style.labelNumbers}>{dataStudent.dni}</p>
                </div>
                <div className={style.formGroup}>
                  <label className={style.label}>EMAIL:</label>
                  <p className={style.labelNumbers}> {dataStudent.email}</p>
                </div>
            </div>
            <div className={style.conteinerDivDivs}>
                <div className={style.formGroup}>
                  <label className={style.label}> Primer nota</label>
                    <select name="grades1"  value={loadGrades.grades[0] || ''}  onChange={(event) => loadGradesStudent(0, event)}>
                    <option value="">Seleccionar nota</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                </div>
                <div className={style.formGroup}>
                  <label className={style.label}> Segunda nota</label>
                    <select name="grades2"  value={loadGrades.grades[1] || ''}  onChange={(event) => loadGradesStudent(1, event)}>
                    <option value="">Seleccionar nota</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                </div>
                <div className={style.formGroup}>
                  <label className={style.label}> Tercer nota</label>
                  <select name="grades3"  value={loadGrades.grades[2] || ''}  onChange={(event) => loadGradesStudent(2, event)}>
                  <option value="">Seleccionar nota</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className={style.formGroup}>
                  <label for="materia" className={style.label}> Materia</label>
                  <select name="nameSubject" value={loadGrades.nameSubject} onChange={(e) => loadDataStudent(e)}>
                  <option value="">Selecciona una materia</option>
                    <option value="Matematicas">Matematicas</option>
                    <option value="Lengua">Lengua</option>
                    <option value="CienciasSociales">Ciencias Sociales</option>
                    <option value="CienciasNaturales">Ciencias Naturales</option>
                    <option value="Etica">Etica</option>
                    <option value="CienciasSociales">Ingles</option>
                  </select>
                </div>
            
                
               
                {/* <label className={style.label}> Recuperatorio</label>
                <input type= "number" name="recovery" value={loadGrades.recovery} onChange={(e) => loadDataStudent(e )}/><br/> */}
               
                
            </div>
        </div>
        <div className={style.buttomDiv}>
           <button className={style.butom} onClick={sendGrades}>ENVIAR</button>
           <Link to="/grades"><button className={style.butom}>VOLVER</button></Link>
        </div>
        <FooterPag/>
    </div>
)

}

export default LoadGrades