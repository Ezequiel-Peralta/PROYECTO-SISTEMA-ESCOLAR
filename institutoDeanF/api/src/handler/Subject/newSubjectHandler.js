const {newSubject}= require("../../controllers/Subject/newSubject")

const newSubjectHandler=async(req,res)=>{
    try {
        const {nameSubject,teachers}=req.body
        const newSubj=await newSubject({nameSubject,teachers})
        res.status(200).json(newSubj)
    } catch (error) {
        console.log({error:error.message},"error en el handler");
        res.status(400).json({error:error.message})
    }
}


module.exports={
    newSubjectHandler
}