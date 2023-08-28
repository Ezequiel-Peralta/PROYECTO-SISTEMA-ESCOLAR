const {Subject}=require("../../db")


const getAllSubject= async ()=>{
    try {
        const auxAllSubject= await Subject.findAll()
        return auxAllSubject
        
    } catch (error) {
        return ({error:error.messaje})
    }
}


module.exports={
    getAllSubject
}