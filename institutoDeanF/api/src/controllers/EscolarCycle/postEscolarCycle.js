const {EscolarCycle,Student}= require("../../db")


const postEscolarCycle=async(newCycle)=>{
try {
    //const newCycle=[{division:"a",course:"1", },{id:"ec68aeeb-a956-4141-b062-0e0ee244868c"}]
    //console.log(newCycle[0],"newCyclenewCycle");
    //console.log(newCycle,"newCycle");
    let student=[]
  for (let i = 0; i < newCycle.length; i++) {
    newCycle[i].id?student.push(newCycle[i].id):""
  }
  //console.log(student,"esto es student");//[ { id: 'ec68aeeb-a956-4141-b062-0e0ee244868c' } ] 
 // console.log();
    const auxstudent= await Student.findByPk(student[0])
    //console.log(auxstudent,"auxstudent");
     const newEscolarCycle=await EscolarCycle.create({
         division:newCycle[0].division,course:newCycle[0].course
     })
     await newEscolarCycle.setStudents(auxstudent);
     const escolarCycleData = await EscolarCycle.findByPk(//se realiza una consulta adicional e para obtener los datos completos del EscolarCycle
        auxstudent.EscolarCycleIdEscolarCycle
      );
  
      const updatedStudent = {
        ...auxstudent.toJSON(),
        EscolarCycle: escolarCycleData,
      };
      // se agrega el objeto EscolarCycle al objeto updatedStudent utilizando la desestructuración y la asignación de propiedades (...auxstudent.toJSON() clona las propiedades existentes del estudiante y luego se agrega EscolarCycle: escolarCycleData para incluir los datos de EscolarCycle). De esta manera, en el objeto updatedStudent se mostrarán tanto los datos del estudiante como los datos completos de EscolarCycle.


return (updatedStudent)
} catch (error) {
    return ({error:error.message})
}

}

// console.log(postEscolarCycle(newCycle));

module.exports={
    postEscolarCycle
}