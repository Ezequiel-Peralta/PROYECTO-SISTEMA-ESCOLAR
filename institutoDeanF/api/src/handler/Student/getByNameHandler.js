const {getByName}= require("../../controllers/Student/getByName")

const getByNameHandler=async (req,res)=>{
    try {
        const {name}=req.params
        console.log(name,"nameHandler");
        const getByNameHandl= await getByName(name)
        res.status(200).json(getByNameHandl)

        } catch (error) {

        res.status(400).json({error:error.message})
    }
}
module.exports={
getByNameHandler        
}