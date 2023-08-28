import style from "./Grades.module.css"
import { Link } from "react-router-dom";




const Grades=()=>{
    return(
        <div>
            <h1>Grades</h1>

            <Link to="/"><button className={style.butom}>Home</button></Link>
        </div>
    )
}

export default Grades