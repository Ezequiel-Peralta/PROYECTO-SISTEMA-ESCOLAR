import {  useEffect} from "react";
import { getAllStudents } from "../../Redux/actions";
import { useDispatch} from "react-redux";
import CardsStudents from '../CardsStudents/CardsStudents'
import style from "./TotalStuden.module.css"
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import NavBar from "../Nav/NavBar";
import SearchBar from "../SearchBar/SearchBar"
import FooterPag from "../Footer/FooterPag";

const TotalStudent=()=>{
    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getAllStudents())
},[dispatch])


    return(
        <div className={style.divbody}>
            <div className={style.div}>
                <h1 className={style.title} >Total estudiantes</h1>
                <SearchBar ></SearchBar>
                <CardsStudents/>
                
                <FooterPag/>
            </div>
        </div>
    )
}
    
export default TotalStudent