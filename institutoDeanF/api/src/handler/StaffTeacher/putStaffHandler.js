const {putStaffById}= require("../../controllers/StaffTeacher/putStaffById")



const putStaffHandler =async(req,res)=>{
    try {
        const {idStaffTeacher,nameStaff,lastNameStaff,userStaff,passwordStaff,dniStaff}=req.body
        const staffModify=await putStaffById({idStaffTeacher,nameStaff,lastNameStaff,userStaff,passwordStaff,dniStaff})
        res.status(200).json(staffModify)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports={
    putStaffHandler
}