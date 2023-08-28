const {putStudentById}=require("../../controllers/Student/putStudentById")



const putStudentHandler =async(req,res)=>{
    try {
        const {id,name,lastName,dni,birthDate,email,phone,image}=req.body
        const studentModify=await putStudentById({id,name,lastName,dni,birthDate,email,phone,image})
        res.status(200).json(studentModify)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports={
    putStudentHandler
}