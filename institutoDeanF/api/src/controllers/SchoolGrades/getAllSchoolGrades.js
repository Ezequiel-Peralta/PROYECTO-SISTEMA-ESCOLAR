const {SchoolGrades} = require("../../db")


const getAllSchoolGrades=async()=>{
try {
  
    const schoolGradesAll= await SchoolGrades.findAll()
    console.log(schoolGradesAll,"esto es schoolGradesAll");
    return schoolGradesAll


} catch (error) {
    console.log({error:error.message})
}




}

module.exports={
    getAllSchoolGrades
}