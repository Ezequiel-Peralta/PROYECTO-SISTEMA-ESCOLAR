import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllStaff } from "../../../Redux/actions";
import CardsUsers from "../CardsUsers/CardsUsers";
import { Link } from "react-router-dom";
import style from "./AllUser.module.css"
import FooterPag from "../../Footer/FooterPag";

const AllUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStaff());
  }, [dispatch]);

  return (
    <div className={style.divbody}>
      <div className={style.div}>
        <h1 className={style.title}>Lista admin</h1>
          <CardsUsers/>
          <div className={style.divBtn}>
            <Link to="banned"><button className={style.button}>BANEAR</button></Link>
            <Link to="usuario"><button className={style.button}>VOLVER</button></Link>
          </div>
      </div>
      <FooterPag/>
    </div>
  );
};

export default AllUser;
