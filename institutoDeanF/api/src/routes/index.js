const { Router } = require('express');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {getAllStudentHandler}=require("../handler/Student/getAllStudentHandler")
const {getAllSubjectHandler}= require("../handler/Subject/getAllSubjectHandler")
const {newStudentHandler}=require("../handler/Student/newStudentHandler")
const {getByNameHandler}=require("../handler/Student/getByNameHandler")
const {getStudentsByIdHandler,getALLidHandler}=require("../handler/Student/getStudentByIdHandler")
const {newSubjectHandler}=require("../handler/Subject/newSubjectHandler")
const {postEscolarCycleHandler}=require("../handler/EscolarCycle/postEscolarCycleHandler")
//const {postAttendanceHandler}=require("../handler/Attendance/postAttendanceHandler")
const {putStudentHandler}=require("../handler/Student/putStudentHandler")
const {getStaffTeacherHandler}=require("../handler/StaffTeacher/getStaffTeacherHandler")
const {postStaffTeacherHandler}=require("../handler/StaffTeacher/postStaffTeacher")
const {putStaffHandler}= require("../handler/StaffTeacher/putStaffHandler")
const {getStaffByNameHandler}=require("../handler/StaffTeacher/getStaffByNameHandler")
const {putStaffBannedHandler}= require("../handler/StaffTeacher/putStaffBannedHandler")
const {getAllSchoolGradesHandler} = require("../handler/SchoolGrades/getAllSchoolGradesHandler")
const {newSchoolGrades} = require("../handler/SchoolGrades/newSchoolGrades")
//student
router.get("/student",getAllStudentHandler)
router.post("/student",newStudentHandler)
router.get("/student/:name",getByNameHandler)
router.get("/student/student/:id",getStudentsByIdHandler)
router.put("/student",putStudentHandler)
router.get("/ids",getALLidHandler)

//schoolgrades
router.get("/allGrades",getAllSchoolGradesHandler)
router.post("/newGrades",newSchoolGrades)

//Subject
router.get("/subject",getAllSubjectHandler)
router.post("/subject",newSubjectHandler)

//EscolarCycle
router.post("/escolarcycle",postEscolarCycleHandler)

//Attendance
//router.post("/attendance",postAttendanceHandler)

//staff
router.get("/staff",getStaffTeacherHandler)
router.get("/staff/:nameStaff",getStaffByNameHandler)
router.post("/staff",postStaffTeacherHandler)
router.put("/staff",putStaffHandler)
router.put("/staffB",putStaffBannedHandler)


module.exports = router;
