const {Subject}= require("../../db")

const newSubject=async({nameSubject,teachers})=>{
    try {
        const newSubject=await Subject.create({
            nameSubject:nameSubject,teachers:teachers
        })
       
        return newSubject
    } catch (error) {
        console.log({error:error.message},"error en el controller");
        return ({error:error.message})
    }
}

module.exports={
    newSubject
}

