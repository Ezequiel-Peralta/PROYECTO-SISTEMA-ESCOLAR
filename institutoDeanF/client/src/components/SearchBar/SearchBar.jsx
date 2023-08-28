import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {get_by_name} from "../../Redux/actions"
import style from "./SearchBar.module.css"
import { Link } from "react-router-dom";

const SearchBar=()=>{
const dispatch = useDispatch()
const [name, setName]=useState("")


const handleInputChange=(event)=>{
    //console.log(event.target.value,"event.target.value");
setName(event.target.value)
}

const handleSubmit=(event)=>{
    event.preventDefault()

  dispatch(get_by_name(name)) 
}


return (
    <div className= {style.divCoteiner}>
        <input className={style.input} type='text' placeholder="Introduce un nombre.." onChange={(event)=>handleInputChange(event)} />
        <button className={style.button} type='submit' onClick={(event)=>handleSubmit(event)} >BUSCAR</button>
        <Link to="student"><button className={style.button}>VOLVER</button></Link>
    </div>
)


}


export default SearchBar