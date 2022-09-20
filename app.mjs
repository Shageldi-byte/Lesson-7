import express from "express";
import router from "./routes/router.mjs";

const app=express();

app.use(express.json({ extended: true}));
app.use(express.urlencoded({extended: true}));


app.use('/api',router);


const port=5006;
app.listen(port,()=>console.log(`App is running on port ${port}`));