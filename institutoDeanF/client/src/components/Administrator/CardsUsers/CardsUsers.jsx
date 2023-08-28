import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./CardsUsers.module.css";
import PaginadoUser from "../CardUser/PaginadoUser";
import CardUser from "../CardUser/CardUser";


const CardsUsers = () => {
  const allstaff = useSelector((state) => state.staff);
  const [currentPage, setCurrentPage] = useState(1);
  const [staffWithPage, setstaffWithPage] = useState(9);
  const indexLastStaff = currentPage * staffWithPage;
  const indexOfFirstStaff = indexLastStaff - staffWithPage;

  const currentCards = allstaff.slice(
    indexOfFirstStaff,
    indexLastStaff
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={style.nose}>
        <PaginadoUser
          staffWithPage={staffWithPage}
          allstaff={allstaff.length}
          paginado={paginado}
        ></PaginadoUser>
      </div>

      <div className={style.cardsContainer}>
        {currentCards?.map((staff) => {
          return (
            <CardUser
              key={staff.idStaffTeacher}
              idStaffTeacher={staff.idStaffTeacher}
              nameStaff={staff.nameStaff}
              lastNameStaff={staff.lastNameStaff}
              dniStaff={staff.dniStaff}
              userStaff={staff.userStaff}
              passwordStaff={staff.passwordStaff}
              banned={staff.banned}
              
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsUsers;
