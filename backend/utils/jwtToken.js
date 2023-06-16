//Creating token and saving it in cookie
const sendToken = (user,statusCode,res)=>{
    
    const token = user.getJWTToken();
    //options for cookie
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
            }
            res.status(statusCode).cookie("token",token,cookieOptions).json({
                success: true,
                token: token,
                user,
                });
                };
                module.exports = sendToken;
