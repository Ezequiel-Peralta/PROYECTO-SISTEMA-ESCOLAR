const {getAllSubject}=require("../../controllers/Subject/getAllSubject")

const getAllSubjectHandler=async(req,res)=>{
    try {
        const auxGetAllSubject=await getAllSubject()

        res.status(200).json(auxGetAllSubject)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

module.exports={
    getAllSubjectHandler
}