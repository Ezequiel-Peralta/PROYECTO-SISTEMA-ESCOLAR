const {getStaffTeacher} = require("../StaffTeacher/getStaffTeacher")

const getByNameStaff = async (nameStaff) => {
try {
    const allStaff= await getStaffTeacher()
   // console.log(name,"namecontroller");
   console.log("hoola");
    if(nameStaff){
        console.log(allStaff,"allStaffallStaff");
        let staffByNameFilter= await allStaff.filter((staff)=>staff.dataValues.nameStaff.toLowerCase().includes(nameStaff.toString().toLowerCase()))
        return staffByNameFilter
    }else{
        return allStudent
    }
} catch (error) {
    return {error:error.message}
}
}


module.exports={
    getByNameStaff
} 