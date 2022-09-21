import addStudentRouter from "./student/add-student.mjs";
import deleteStudentRouter from "./student/delete-student.mjs";
import express from "express";
import getStudentsRouter from "./student/get-student.mjs";
import loginRouter from "./auth/auth.mjs";
import updateStudentRouter from "./student/update-student.mjs";

const router=express.Router();

router.use('/get-students',getStudentsRouter);
router.use('/add-student',addStudentRouter);
router.use('/update-student',updateStudentRouter);
router.use('/delete-student',deleteStudentRouter);
router.use('/auth',loginRouter);
export default router;