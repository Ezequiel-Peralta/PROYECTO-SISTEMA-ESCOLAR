// const {Student,Attendance}=require("../../db")

// const postAttendance =async(auxAttendance)=>{
//     try {
//         //const auxAttendance=[{present:true,absent:false },{id:"c63a5009-062c-4156-9779-82a4ad41bc96"}]
//         for (let i = 0; i < auxAttendance.length; i++) {
//             var auxStudent=await Student.findOne({where:{id:auxAttendance[i].id}})
//         }
//         console.log(auxStudent,"auxStudent");
//         const students=await Student.findByPk(auxStudent[0].id)
//         const newAttendance= await Attendance.create({
//             present:auxAttendance[0].present,absent:auxAttendance[0].absent
//         })
//         await students.addAttendance(newAttendance)

//     } catch (error) {
//         return ({error:error.messaje})
//     }
// }


// module.exports={
//     postAttendance
// }