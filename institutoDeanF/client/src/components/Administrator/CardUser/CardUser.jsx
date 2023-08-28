
import style from "./CardUser.module.css"


const CardUser=({idStaffTeacher,nameStaff,lastNameStaff,dniStaff,userStaff,passwordStaff,banned})=>{
    return (
            <div className={style.cardContainer}>
               
                <div>
                  
                    <h2><span>Nombre:</span> {nameStaff}</h2>
                  
                    <h3><span>Apellido:</span> {lastNameStaff}</h3>
                    <h3><span>DNI:</span> {dniStaff}</h3>
                    <h3><span>Usuario:</span> {userStaff}</h3>
                    <h3><span>Password:</span> {passwordStaff}</h3>
                    <h3><span>Id:</span> {idStaffTeacher}</h3>
                    {console.log(banned,"esto es bannedbanned")}
                    <h3><span>banned:</span> {banned}</h3>
                   
                </div>
            </div>
    )
}


export default CardUser

