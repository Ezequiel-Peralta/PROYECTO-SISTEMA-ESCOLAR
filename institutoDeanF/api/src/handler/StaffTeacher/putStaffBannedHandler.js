const {putStaffBanned}= require("../../controllers/StaffTeacher/putStaffBanned")




const putStaffBannedHandler=async(req,res)=>{
try {
    const {idStaffTeacher,banned}= req.body
    const modified=await putStaffBanned (idStaffTeacher,banned)
    res.status(200).json(modified)

} catch (error) {
    res.status(400).json(error)
}


}

module.exports={
    putStaffBannedHandler
}