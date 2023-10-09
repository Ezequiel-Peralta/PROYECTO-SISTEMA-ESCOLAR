const { SchoolGrades, Student } = require("../../db");
const { getStudentById } = require("../Student/getStudentById");

const postSchoolGrades = async (auxNewSchoolGrades) => {

  try {
    let student = [];
    for (let i = 0; i < auxNewSchoolGrades.length; i++) {
      auxNewSchoolGrades[i].id ? student.push(auxNewSchoolGrades[i].id) : "";
    }
    const auxstudent = await getStudentById(student[0]);

    const newSchoolGrades = await SchoolGrades.create({
      grades: auxNewSchoolGrades[0].grades,
      recovery: auxNewSchoolGrades[0].recovery,
      finalGrades: auxNewSchoolGrades[0].finalGrades,
      nameSubject: auxNewSchoolGrades[0].nameSubject,
    });
    console.log("holaa");
    await newSchoolGrades.addStudent(auxstudent, {
      through: { id: student[0] },
    });

    return "Nota cargada con exito";

  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  postSchoolGrades,
};
