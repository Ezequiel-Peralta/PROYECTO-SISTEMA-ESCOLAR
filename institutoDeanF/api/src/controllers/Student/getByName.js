const {getAllStudent} = require("../Student/getAllStudent")

const getByName = async (name) => {
try {
    const allStudent= await getAllStudent()
    console.log(name,"namecontroller");
    if(name){
        let studentByNameFilter= await allStudent.filter((student)=>student.dataValues.name.toLowerCase().includes(name.toString().toLowerCase()))
        return studentByNameFilter
    }else{
        return allStudent
    }
} catch (error) {
    return {error:error.message}
}
}


module.exports={
    getByName
}