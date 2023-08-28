import { useState } from "react";
import { useSelector } from "react-redux";
import CardStudent from "../CardStudent/CardStudent";
import style from "./Cards.module.css";
import Paginado from "../../Paginado/Paginado";

const CardsStudents = () => {
  const allStudents = useSelector((state) => state.students);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentWithPage, setStudentWithPage] = useState(9);
  const indexLastStudent = currentPage * studentWithPage;
  const indexOfFirstStudents = indexLastStudent - studentWithPage;

  const currentCards = allStudents.slice(
    indexOfFirstStudents,
    indexLastStudent
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={style.nose}>
        <Paginado
          studentWithPage={studentWithPage}
          allStudents={allStudents.length}
          paginado={paginado}
        ></Paginado>
      </div>

      <div className={style.cardsContainer}>
        {currentCards?.map((student) => {
          return (
            <CardStudent
              key={student.id}
              id={student.id}
              name={student.name}
              lastName={student.lastName}
              dni={student.dni}
              birthDate={student.birthDate}
              email={student.email}
              phone={student.phone}
              image={student.imageURL?student.imageURL:student.image}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsStudents;
