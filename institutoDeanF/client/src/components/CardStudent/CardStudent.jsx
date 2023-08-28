import { Link } from "react-router-dom"
import style from "./Card.module.css"


const CardStudent=({id,name,lastName,dni,birthDate,image})=>{
    return (
            <div className={style.cardContainer}>
                <div>
                    <img src={image} alt="img not insert" className={style.divimage}  ></img>
                </div>
                <div>
                    <Link to={`detail/${id}`}>
                    <h2><span>Nombre:</span> {name}</h2>
                    </Link>
                    <h3><span>Apellido:</span> {lastName}</h3>
                    <h3><span>DNI:</span> {dni}</h3>
                    <h3><span>Fecha de nacimiento:</span> {birthDate}</h3>
                </div>
            </div>
    )
}


export default CardStudent

