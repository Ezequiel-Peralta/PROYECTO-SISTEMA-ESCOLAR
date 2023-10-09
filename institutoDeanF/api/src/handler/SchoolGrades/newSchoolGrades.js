const {postSchoolGrades} = require("../../controllers/SchoolGrades/postSchoolGrades")





const newSchoolGrades=async(req,res)=>{
try {
    const auxNewSchoolGrades = req.body
    const ax= await postSchoolGrades(auxNewSchoolGrades)
    res.status(200).json(ax)
} catch (error) {
    res.status(400).json({error:error.message})
}


}

module.exports={
    newSchoolGrades
}