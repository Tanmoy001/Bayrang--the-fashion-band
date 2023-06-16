const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt=require("bcryptjs")
const JWT = require("jsonwebtoken")
const crypto = require("crypto")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxLength:[30,"Name cannot exceed "],
        minLength:[5,"Name should have more then 5 characters"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Your Password"],
        minLength:[8,"Password should have more then 8 characters"],
        select:false    
    },
    avatar:{
        public_id:{
            type:String,
            required:[true,"Please Enter Your public_id"]
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user",
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,

});
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
});

//JWT Token

userSchema.methods.getJWTToken = function(){
    return JWT.sign({_id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN,
    });
};
//Password Match(compare password)
userSchema.methods.comparePassword=async function(enteredPassword){
/*     console.log(enteredPassword) */
    return await bcrypt.compare(enteredPassword,this.password);
    };

    
//Generating Password reset token


userSchema.methods.getResetPasswordToken=function(){
    /*         console.log(this._id) */
    const resetToken=crypto.randomBytes(20).toString("hex");
    
    //Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire=Date.now()+10*60*1000;
    return resetToken;
};
module.exports=mongoose.model("User",userSchema);