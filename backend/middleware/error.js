const ErrorHandler = require('../utils/ErrorHandler');
module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server Error";

    if(err.name === "CastError"){
        const message = `Resource not found with this id.. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
}

if(err.name === "JsonWebTokenError"){
    const message = "Your url is invalid please try again latter";
    err = new ErrorHandler(message, 400);
}
if(err.name === "TokenExpiredError"){
    const message = "Your token has expired please try again latter";
    err = new ErrorHandler(message, 400);
}
res.status(err.statusCode).json({
    success: false,
    message: err.message
})
}