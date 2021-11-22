const {validationResult}= require('express-validator/check')

module.exports=req=>{
    const validationErrors=validationResult(req);
    if(!validationErrors.isEmpty()){
        const error=new Error('Validation Failed');
        error.stausCode=442;
        error.validation=validationErrors.array();
        throw error;
    }
}