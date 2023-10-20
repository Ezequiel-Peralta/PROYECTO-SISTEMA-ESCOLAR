const { SchoolGrades, Student } = require("../../db");
const { getStudentById } = require("../Student/getStudentById");

const postSchoolGrades = async (auxNewSchoolGrades) => {
console.log(auxNewSchoolGrades,"nuevo objeto en el controller");
  try {
    let student = [auxNewSchoolGrades.idStudent];
    //console.log(student,"student en el controller");
    const auxstudent = await getStudentById(student[0]);
    //console.log(auxstudent,"aux student en el controller");
    const gradesAsNumbers = auxNewSchoolGrades.grades.map((grade) => parseInt(grade));
    
    const newSchoolGrades = await SchoolGrades.create({
      grades: gradesAsNumbers,
      //recovery: auxNewSchoolGrades.recovery,
      finalGrades: auxNewSchoolGrades.finalGrades,
      nameSubject: auxNewSchoolGrades.nameSubject,
    });
    console.log("holaa-------------");
    await newSchoolGrades.addStudent(auxstudent, {
      through: { id: student[0] },
    });
    console.log("Final-------------");
  } catch (error) {
    console.log ( {error: error.message}  );
  }
};

module.exports = {
  postSchoolGrades,
};
