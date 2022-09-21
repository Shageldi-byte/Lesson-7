import express from "express";
import { users } from "../../modules/constant.mjs";
import { badRequest, generateMessage, generateResponse } from "../../modules/response.mjs";
import { valueChecker } from "../../modules/utils.mjs";

const loginRouter= express.Router();

loginRouter.post('/sign-in',(req,res)=>{

    const {
        username,
        password
    } = req.body;

    // const username=req.body.username;
    // const password=req.body.password;

    if(valueChecker(req.body) || valueChecker(username) || valueChecker(password)){
        // res.status(400).json({
        //    error:true,
        //    message:{
        //     tm:"Boş maglumat geldi",
        //     ru:"Пожалуйста, введите необходимые значения",
        //     en:"Please enter required values"
        //    },
        //    body:null
        // })
        badRequest(req,res);
    } else {
        let foundUser=users.find(item=>{
            return item.username==username && item.password==password
        });

        if(valueChecker(foundUser)){
                // res.status(404).json({
                //     error:true,
                //     message:{
                //         tm:"Ulanyjy ady ya-da acar sozi nadogry",
                //         ru:"Логин или пароль неверны",
                //         en:"Username or password is incorrect"
                //     },
                //     body:null
                // })

                badRequest(req,res);
        } else {
            // res.json({
            //         error:false,
            //         message:{
            //             tm:"Ustunlikli iceri girdiniz",
            //             ru:"Успешно войти",
            //             en:"Successfully sign in"
            //         },
            //         body:foundUser
            //     })

            res.json(generateResponse(false,generateMessage(
                'Ustunlikli iceri girdiniz',
                'Successfully sign in',
                'Успешно войти'
                ),foundUser));
            res.end();
        }
    }
    
});

export default loginRouter;