




const {getByNameStaff}= require("../../controllers/StaffTeacher/getByNameStaff")

const getStaffByNameHandler=async (req,res)=>{
    try {
        const {nameStaff}=req.params
        console.log(nameStaff,"nameHandler");
        const getByNameHandl= await getByNameStaff(nameStaff)
        res.status(200).json(getByNameHandl)

        } catch (error) {

        res.status(400).json({error:error.message})
    }
}
module.exports={
    getStaffByNameHandler        
}