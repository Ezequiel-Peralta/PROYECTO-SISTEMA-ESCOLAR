const {getStaffById}= require("./getStaffById")


const putStaffById = async({idStaffTeacher,nameStaff,lastNameStaff,userStaff,passwordStaff,dniStaff,banned})=>{
    try {
        const staff= await getStaffById(idStaffTeacher)
         await staff.update({nameStaff:nameStaff,lastNameStaff:lastNameStaff,dniStaff:dniStaff,userStaff:userStaff,passwordStaff:passwordStaff,banned:banned})
        return ("El personal educativo fue modificado con exito!!")
    } catch (error) {
        return ({error:error.message})
    }
}

module.exports={
    putStaffById
}