import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import style from "./Detail.module.css"
import FooterPag from "../Footer/FooterPag";

const Detail=()=>{
const {id}=useParams()
const [detail,setDetail]=useState({})

useEffect(()=>{
axios.get(`http://localhost:3001/student/student/${id}`)
.then ((data)=>{
    // console.log(data.data,"esto es data");
    // console.log(data.data.id,"esto es data.data.id");
    if(data.data.id){
        setDetail(data.data)
    }else{
        window.alert("there is not student whit this id")
    }
})
},[id])


return(
    <div className={style.divcontainer}>
        <div className={style.titleANDname}>
            <h1 className={style.title}>DETALLES DEL ESTUDIANTE</h1>
            <h1>{detail.name + " " + detail.lastName }</h1>
        </div>
        <div className={style.containerImgandLabel}>
            <div className={style.contenedor}>
           
                <label className={style.label}>DNI: </label>
                <p className={style.labelNumbers}>{detail.dni}</p>
                <label className={style.label}>TELÉFONO: </label>
                <p className={style.labelNumbers}>{detail.phone}</p>
                <label className={style.label}>EMAIL:</label>
                <p className={style.labelNumbers}> {detail.email}</p>
                <label className={style.label} >FECHA DE NACIMIENTO: </label>
                <p className={style.labelNumbers}>{detail.birthDate}</p>
                <label className={style.label}>ID: </label>
                <p className={style.labelNumbers}>{detail.id}</p>
            </div>
            <div>
                <img src={detail.image} alt= "img not found" className={style.img}></img>
            </div>
        </div>
        <div className={style.buttomDiv}>
            <Link to="/students"><button className={style.butom}>VOLVER</button></Link>
            <Link to="/modify"><button className={style.butom}>MODIFICAR</button></Link>
            <Link to="/loadGrades"><button className={style.butom}>CARGAR NOTAS</button></Link>
        </div>
        <FooterPag/>
    </div>
)

}

export default Detail