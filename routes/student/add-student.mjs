import express from "express";
import { students } from "../../modules/constant.mjs";

const addStudentRouter=express.Router();

addStudentRouter.post('/',(req,res)=>{
    students.push(req.body);
    res.send('Successfully added');
})

export default addStudentRouter;