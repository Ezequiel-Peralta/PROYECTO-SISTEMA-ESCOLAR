const {newStudentController}=require("../../controllers/Student/newStudent")

const newStudentHandler=async(req,res)=>{
    try {
        const auxNewStudent = req.body
        console.log(req.body,"esto es req body")
        const newStudent=await newStudentController(auxNewStudent)
        res.status(200).json(newStudent)
    } catch (error) {
        console.log({error:error.message})
        res.status(400).json({error:error.message})
    }

}

module.exports={
    newStudentHandler
}