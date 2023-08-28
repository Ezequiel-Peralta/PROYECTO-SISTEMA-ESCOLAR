import React, {  useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const SchoolData=()=>{
    const [schoolData,setSchoolData]=useState()


    return(
        <form>
            <h1>SCHOL DATA</h1>
            <div>
                <label htmlFor="">id</label>
                <input type="text" />
                <label htmlFor="">materia</label>
                <input type="text" />
                
            <Link to="/"><button>ATRAS</button></Link> 
                <li>
                    <h1>primer trimestre</h1>
                    <ul>nota1</ul>
                    <input type="text" />
                    <ul>nota2</ul>
                    <input type="text" />
                    <ul>nota3</ul>
                    <input type="text" />
                </li>
                <li>
                    <h1>segundo trimestre</h1>
                    <ul>nota1</ul>
                    <input type="text" />
                    <ul>nota2</ul>
                    <input type="text" />
                    <ul>nota3</ul>
                    <input type="text" />
                </li>
                <li>
                    <h1>tercero trimestre</h1>
                    <ul>nota1</ul>
                    <input type="text" />
                    <ul>nota2</ul>
                    <input type="text" />
                    <ul>nota3</ul>
                    <input type="text" />
                </li>
             
            </div>
        </form>
    )
}


export default SchoolData