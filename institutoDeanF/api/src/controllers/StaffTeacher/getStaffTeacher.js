const {StaffTeacher} = require ("../../db")


const getStaffTeacher=async ()=>{
try {
    
const allStaff= await StaffTeacher.findAll()

return allStaff

} catch (error) {
    return {error:error.message}
}

    
}

module.exports={
    getStaffTeacher
}