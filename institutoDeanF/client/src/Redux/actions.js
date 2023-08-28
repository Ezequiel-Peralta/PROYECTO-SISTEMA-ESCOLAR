import {GET_ALL_STUDENTS,GET_BY_NAME,GET_ALL_STAF,GET_BY_NAME_STAFF} from "./actionsTypes"
import axios from "axios"


export const getAllStudents=()=>{

return   async(dispatch)=>{

    const response = await axios.get(`http://localhost:3001/student`)

    const data=response.data

   dispatch({
    type:GET_ALL_STUDENTS,
    payload:data
   })

}

}

export const get_by_name=(name)=>{
    return async (dispatch)=>{
        
            let data;
            const  response= await axios.get(`http://localhost:3001/student/${name}`)
            const responseAll=await axios.get(`http://localhost:3001/student`)  
            const dataAll= responseAll.data
            
            let dataF=response?.data
           //console.log(dataF,"DATAAAAA")
           if(dataF.length>0){
            data=dataF
           }else{
            alert("No existe el nombre buscado")
            data=dataAll
           }
            console.log(data,"data final");
            return dispatch({
                type:GET_BY_NAME,
                payload: data
            })
       
    }    
}

export const getAllStaff=()=>{

    return   async(dispatch)=>{
    
        const response = await axios.get(`http://localhost:3001/staff`)
    
        const data=response.data
    
       dispatch({
        type:GET_ALL_STAF,
        payload:data
       })
    
    }
    
    }

    export const get_by_name_staff=(nameStaff)=>{
        return async (dispatch)=>{
            
                let data;
                const  response= await axios.get(`http://localhost:3001/staff/${nameStaff}`)
                const responseAll=await axios.get(`http://localhost:3001/staff`)  
                const dataAll= responseAll.data
                
                let dataF=response?.data
               //console.log(dataF,"DATAAAAA")
               if(dataF.length>0){
                data=dataF
               }else{
                alert("No existe el nombre buscado")
                data=dataAll
               }
                console.log(data,"data final");
                return dispatch({
                    type:GET_BY_NAME_STAFF,
                    payload: data
                })
           
        }    
    }

    
    