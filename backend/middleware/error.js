const errorHander = require('../utils/errorhander');

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message||"Server Error";

    //Cast Error : wrong mongodb id error
    if (err.name == "CastError"){
        const message = `Resource not found. Invalid ${err.path}`;
        err = new errorHander(message,400);
    }

    //Mongoose duplicate key error
    if(err.code === 11000){
        let field = Object.keys(err.keyValue)[0];
        let value = err.keyValue[field]
        const message=`Duplicate entry for ${field}: ${value}`
        err = new errorHander(message,400)
    }

    //Wrong JWT error
    if (err.name == "JsonWebTokenError"){
        const message = `Invalid Json Web Token, please try again`;
        err = new errorHander(message,400);
    }

    //JWTEXpire error

    if (err.name == "TokenExpiredError"){
        const message = `Invalid Json Web Token, please try again`;
        err = new errorHander(message,400);
    }


    res.status(err.statusCode).json({
        success:false,
         error:err.message
        /*  error:err.stack  */ //(for where the errors are)
    })

}