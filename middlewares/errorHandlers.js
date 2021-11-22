module.exports=(error,req,res,newxt)=>{
    const status=error.stausCode || 500;
    const message=error.message;
    const data=error.data;
    const validation=error.validation;

    res.status(status).json({
        message,
        data,
        validation
    })
}