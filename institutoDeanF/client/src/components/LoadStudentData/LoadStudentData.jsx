
import { Link } from "react-router-dom"
import style from "./LoadStudentData.module.css"


const LoadStudentData=({id,name,lastName,dni,birthDate,image})=>{
    return (
            <div >
                <div>
                  <h1>Cargando notas de : {name+" " +lastName} </h1>
                </div>
                <div>
                   
                </div>
            </div>
    )
}


export default LoadStudentData





