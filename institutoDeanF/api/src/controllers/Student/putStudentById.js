const {getStudentById}= require("../../controllers/Student/getStudentById")


const putStudentById = async({id,name,lastName,dni,birthDate,email,phone,image})=>{
    try {
        const student= await getStudentById(id)
        const studentModify= await student.update({name:name,lastName:lastName,dni:dni,birthDate:birthDate,email:email,phone:phone,image:image})
        return ("The student has been successfully modified!!")
    } catch (error) {
        return ({error:error.message})
    }
}

module.exports={
    putStudentById
}