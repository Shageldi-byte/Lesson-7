import express from "express";
import { students } from "../../modules/constant.mjs";

const getStudentsRouter=express.Router();

getStudentsRouter.get('/',(req,res)=>{
    res.json(students);
})

export default getStudentsRouter;