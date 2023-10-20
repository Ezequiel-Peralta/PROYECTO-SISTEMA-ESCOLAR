import { useEffect, useState } from "react";
import style from "./Grades.module.css";
import { Link } from "react-router-dom";
import { getAllStudents } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import CardStudent from "../CardStudent/CardStudent";


const Grades = () => {
  const [student, setStudent] = useState();
  const dispatch = useDispatch();
  const [studentName, setStudentName] = useState({
    name: "",
  });
  const [studentFilter, setStudentFilter] = useState();
  useEffect(async () => {
    const dataAxios = await axios.get("http://localhost:3001/student");
    const students = dataAxios.data;
    setStudent(students);
  }, [dispatch]);



  const changeHandler = (event) => {
    setStudentName({
      ...studentName,
      [event.target.name]: event.target.value,
    });
  };



  const searchName = () => {
   let studentsNames=[]
   for (let i = 0; i < student.length; i++) {
    if(student[i].name.toLowerCase()===studentName.name.toLowerCase()){
        studentsNames.push(student[i])
    }}  
  setStudentFilter(studentsNames)
  }




  return (
    <div >
      <Link to="/">
        <button className={style.butom}>Home</button>
      </Link>
      <h1>Cargar notas </h1>
      <div>
        <label htmlFor="name">Ingrese el nombre</label>
        <input
          type="text"
          value={studentName.name}
          name="name"
          onChange={changeHandler}
        />
        <button onClick={() => searchName(studentName)} className={style.butom}>Buscar</button>
      </div>

      <div>
{
studentFilter?.map((el)=>{
    return( 
      <div>

        <CardStudent
        key={el.id}
        id={el.id}
        lastName={el.lastName}
        name={el.name}
        dni={el.dni}
        image={el.image}
        
        />,
        <Link to={`loadGrades/${el.id}`}>
        <div className={style.divButomCargar}><button className={style.butom}>Cargar</button></div>
        </Link>
        </div>
        )
        
      } )
}
     

      </div>
    </div>
  );
};

export default Grades;
