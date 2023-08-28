const {Student}= require("../../db")

const newStudentController=async(auxNewStudent )=>{
try {
    // console.log("hols en controller")
    // console.log(auxNewStudent,"auxNewStudentauxNewStudent")
    const newStudent= await Student.create({name:auxNewStudent.name, lastName:auxNewStudent.lastName,dni:auxNewStudent.dni,birthDate:auxNewStudent.birthDate,email:auxNewStudent.email,phone:auxNewStudent.phone, image:auxNewStudent.birthDate , imageURL:auxNewStudent.imageURL}) 
    return newStudent

} catch (error) {
    console.log({error:error.message})
    return({error:error.message})
}

}

module.exports={
    newStudentController
}