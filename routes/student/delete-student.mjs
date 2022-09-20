import express from "express";

const deleteStudentRouter = express.Router();

deleteStudentRouter.delete('/',(req,res)=>{
    res.send('Deleted ');



});



export default deleteStudentRouter;
