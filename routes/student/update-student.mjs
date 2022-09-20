import express from "express";

const updateStudentRouter = express.Router();

updateStudentRouter.put('/', (req, res) => {
    res.send('updated')
});

updateStudentRouter.get('/', (req, res) => {
    res.send('get updated')
});

export default updateStudentRouter;