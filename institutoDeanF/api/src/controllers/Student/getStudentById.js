const { getAllStudent} = require("../Student/getAllStudent")

const getALLid=async()=>{
    try {
        let ids=[]
        const students=await getAllStudent()
        //console.log(students[0].dataValues.id,"id cero");
        for (let i = 0; i < students.length; i++) {
            ids.push(students[i].dataValues.id)
            
        }
       return ids
    } catch (error) {
       return ({error:error.message}) 
    }
}

const getStudentById=async(id)=>{
    try {
       
const allStudent= await getAllStudent() 
//console.log(id.toString(),"---------")

const filterStudent = await allStudent.find((student)=>student.dataValues.id.toString()===id.toString())
//student.dataValues.id.toString()==id.toString()
//console.log(filterStudent,"filterStudent");
return filterStudent
    } catch (error) {
        return ({error:error.message})
    }
}


module.exports={
    getStudentById,
    getALLid

}