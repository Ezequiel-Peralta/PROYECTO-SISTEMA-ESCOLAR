const {postEscolarCycle}=require("../../controllers/EscolarCycle/postEscolarCycle")

const postEscolarCycleHandler=async(req,res)=>{
    try {
        const newCycle=[]=req.body
        const escolarCycle= await postEscolarCycle(newCycle)
        res.status(200).json(escolarCycle)

    } catch (error) {
       res.status(400).json({error:error.message}) 
    }
}

module.exports={
    postEscolarCycleHandler
}