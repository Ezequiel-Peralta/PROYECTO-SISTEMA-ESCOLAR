const {getStudentById,getALLid}=require("../../controllers/Student/getStudentById")


const getALLidHandler=async(req,res)=>{
    try {
        const allIds=await getALLid()
        res.status(200).json(allIds)


    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const getStudentsByIdHandler=async(req,res)=>{
    try {
        //console.log("hola");
        const {id}=req.params
        const getStudentId=await getStudentById(id)
        res.status(200).json(getStudentId)
        
    } catch (error) {
       res.status(400).json({error:error.message})
    }
}

module.exports={
    getStudentsByIdHandler,
    getALLidHandler
}