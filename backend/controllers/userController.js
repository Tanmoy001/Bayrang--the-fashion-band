const User = require("../models/userModel");
const errorHander = require("../utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")
const crypto= require("crypto")

//Register a user
exports.registerUser = catchAsyncError( async(req,res,next)=>{
   const{name,email,password}=req.body;
    const user = await User.create({
        name,email,password,avatar:{
            public_id:"This is the sample user",
            url:"profilepicUrl"
        }
    });
   sendToken(user,201,res);
})


//LOgin user
exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body;
    
    //checking if user has given password and email both
    if(!email || !password){
        return next(new errorHander("Please provide email and password",400))       
            }
            //checking if user is registered or not
            const user = await User.findOne({email}).select("+password");
            if(!user){
                return next(new errorHander("Invalid email or password",401))
            }

          
            const isPasswordMatched =await user.comparePassword(password)
            console.log(isPasswordMatched)
            if(!isPasswordMatched){
                return next(new errorHander("Invalid email or password",401))
            }
           
   sendToken(user,200,res);

});

//Logout User

exports.logoutUser = catchAsyncError(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    res.status(200).json({
        success:true,
        message:"Logged Out",
    });
});

//Forgot password
exports.forgotPassword = catchAsyncError(async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return next(new errorHander("User not found with this email",404))
        }
        //Create a reset token
        const resetToken = user.getResetPasswordToken();
        await user.save({validateBeforeSave:false});
        //Create reset url
        const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
        const message = `Your password reset token is as follow: \n\n ${resetUrl}\n\nIf you have not requested this email then, please ignore it`;
        try{
            await sendEmail({
                email:user.email,
                subject:`BeyRang Password Recovery`,
                message:message,
            });
        res.status(200).json({
            success:true,
            message:`Email send to ${user.email} successfully `,
        })    
        }
            catch(error){
                user.resetPasswordExpire = undefined;
                user.resetPasswordToken=undefined;
                await user.save({validateBeforeSave:false});
                return next(new errorHander(error.message,500))

            }
        });


//Reset password
exports.resetPassword = catchAsyncError(async(req,res,next)=>{
    
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()}
        });
        if(!user){
            return next(new errorHander("Invalid token",400))
            }
        if(req.body.password!== req.body.confirmPassword){
            return next(new errorHander("Password not matched",201))
        }
            user.password = req.body.password;
            user.resetPasswordToken=undefined;
            user.resetPasswordExpire=undefined;
        await user.save();
        sendToken(user,200,res);
    });
        