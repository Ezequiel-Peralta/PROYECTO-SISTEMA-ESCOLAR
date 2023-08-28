const {StaffTeacher}= require("../../db");
const {getStaffById}=require("./getStaffById")



const putStaffBanned=async (idStaffTeacher,banned)=>{
    try {
        console.log("hola");
const allStaf=await getStaffById(idStaffTeacher)
allStaf.update({banned:banned})
console.log(allStaf,"allStaf.dataValues.banned=banned");

 return ("Proceso exitoso")
        
    } catch (error) {
        return ({error:error.message})
    }
}

module.exports={
    putStaffBanned,
}