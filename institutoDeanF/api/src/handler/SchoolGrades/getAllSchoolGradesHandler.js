const {getAllSchoolGrades}= require ("../../controllers/SchoolGrades/getAllSchoolGrades")

const getAllSchoolGradesHandler =async(req, res)=>{
try {
    const allSchoolGradesHandler= await getAllSchoolGrades ()
 
    res.status(200).json(allSchoolGradesHandler)
} catch (error) {
    res.status(400).json({error:error.message})
}

}

module.exports={
    getAllSchoolGradesHandler
}