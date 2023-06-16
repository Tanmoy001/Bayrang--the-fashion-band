const errorHander = require('../utils/errorhander');

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message||"Server Error";

    //Cast Error : wrong mongodb id error
    if (err.name == "CastError"){
        const message = `Resource not found. Invalid ${err.path}`;
        err = new errorHander(message,400);
    }
    res.status(err.statusCode).json({
        success:false,
        /*  error:err.message, */
         error:err.stack //(for where the errors are)
    })

}