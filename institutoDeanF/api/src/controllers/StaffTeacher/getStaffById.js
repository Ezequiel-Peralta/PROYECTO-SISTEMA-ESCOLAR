const {getStaffTeacher} = require("./getStaffTeacher")

const getStaffById=async(idStaffTeacher)=>{
    try {
       
const allStaff= await getStaffTeacher() 
//console.log(id.toString(),"---------")

const filterStaff = await allStaff.find((staff)=>staff.dataValues.idStaffTeacher.toString()===idStaffTeacher.toString())
//student.dataValues.id.toString()==id.toString()
//console.log(filterStudent,"filterStudent");
return filterStaff
    } catch (error) {
        return ({error:error.message})
    }
}


module.exports={
    getStaffById,
   

}