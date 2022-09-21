export const generateMessage=(tm,en,ru)=>{
    return {
        tm:tm,
        en:en,
        ru:ru
    }
}

export const generateResponse=(error,message,body)=>{
    return {
        error:error,
        message:message,
        body:body
    }
}

export const badRequest=(req,res)=>{
    res.status(400).json(generateResponse(
        true,
        generateMessage('Yalnyshlyk yuze cykdy','Something went wrong!','Что-то пошло не так!'),
        null
        ));
    res.end();
}