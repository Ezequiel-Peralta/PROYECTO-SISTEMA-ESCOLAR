const {getStaffTeacher}= require("../../controllers/StaffTeacher/getStaffTeacher")




const getStaffTeacherHandler=async(req,res)=>{
try {
    const allStaf= await getStaffTeacher()
    res.status(200).json(allStaf)
} catch (error) {
    res.status(400).json({error:error.message})
    
}


}
module.exports={
    getStaffTeacherHandler
}