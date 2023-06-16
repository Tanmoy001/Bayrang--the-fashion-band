 const errorHander = require("../utils/errorhander");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel");

//checking the cookies whether the user is already loged in or not if loged in then fetching out the id of the user

exports. isAuthenticatedUser = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies;
  /*   console.log(token); */
    if(!token){
        return next(new errorHander("Please Login to your account",401));
    }
const decodedData = jwt.verify(token,process.env.JWT_SECRET);
req.user=await User.findById( decodedData._id);
/* console.log(req.user) */

next();
});

//Checking the role whether it is admin or user if admin then can modify the data

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
      
      if (!roles.includes(req.user.role)) {
        return next(
          new errorHander("You have no acees for this",401)
        );
      }
  
      next();
    };
  };
 