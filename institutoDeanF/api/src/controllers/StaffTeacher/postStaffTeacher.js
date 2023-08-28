const {StaffTeacher}=require("../../db")




const postStaffTeacher=async(auxStaff)=>{
try {

    const   newStaf= await StaffTeacher.create({nameStaff:auxStaff.nameStaff,lastNameStaff:auxStaff.lastNameStaff,dniStaff:auxStaff.dniStaff,userStaff:auxStaff.userStaff, passwordStaff:auxStaff.passwordStaff,banned:auxStaff.banned})
    console.log(newStaf,"controller");

 return "se ha creado"
    
} catch (error) {
    return ({error:error.message})
}




}

module.exports={
    postStaffTeacher

}