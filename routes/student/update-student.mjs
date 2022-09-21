import express from "express";

const updateStudentRouter = express.Router();

updateStudentRouter.put('/', (req, res) => {
    res.send('updated')
});


export default updateStudentRouter;