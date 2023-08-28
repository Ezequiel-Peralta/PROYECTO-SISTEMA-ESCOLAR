const {postStaffTeacher}=require("../../controllers/StaffTeacher/postStaffTeacher")



const postStaffTeacherHandler=async(req,res)=>{
try {

    const auxStaff= req.body
    const newStaff=await postStaffTeacher(auxStaff)
    console.log(newStaff,"llllll");
    res.status(200).json(newStaff)
} catch (error) {
    res.status(400).json({error:error.message})
}




}


module.exports={
    postStaffTeacherHandler
}