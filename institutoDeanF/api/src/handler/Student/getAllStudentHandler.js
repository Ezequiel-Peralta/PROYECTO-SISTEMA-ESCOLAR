const {getAllStudent} = require("../../controllers/Student/getAllStudent")

const getAllStudentHandler = async (req, res)=>{
    try {
        const allStudent= await getAllStudent()
        res.status(200).json(allStudent)
    } catch (error) {
        console.log({error:error.message})
        res.status(400).json({error:error.message})
    }
}

module.exports={
    getAllStudentHandler
}