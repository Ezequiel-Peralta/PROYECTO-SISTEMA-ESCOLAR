const {Student,EscolarCycle,Subject,Attendance}= require ("../../db")
const studentData = require("../../../Data.js")



const auxStudent= studentData.map((el)=>{
    return{
        name: el.name,
        lastName:el.lastName,
        dni: el.dni,
        birthDate: el.birthDate,
        email:el.email,
        phone:el.phone,
        image: el.image
    }
})

const getAllStudent= async()=>{
    try {
    const student = await Student.findAll({
        include: [
            {
              model: Subject,
            },
            {
              model: EscolarCycle,
              as: 'EscolarCycle',
              attributes: ["division", "course","yearCycle"],
            },
            {
                model:Attendance,
                attributes:["present","absent"]
            }
          ],
    })
if(student.length===0){
    const studentDB= await Student.bulkCreate(auxStudent)
    return studentDB
}
    return student
} catch (error) {
    console.log({error:error.message})
}}

module.exports={
    getAllStudent
}