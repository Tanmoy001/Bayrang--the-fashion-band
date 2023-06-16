
const nodeMailer = require("nodemailer")

const sendEmail = async(options)=>{
    const transpoter = nodeMailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        service:process.env.SMTP_SEIVICE,
        auth:{
            user:"chowdhurytanmoy580@gmail.com",
            pass:"odywupguenbnqmda",

        },
    });
    const mailOptions ={
        from:"chowdhurytanmoy580@gmail.com",
        to:options.email,
        subject:options.subject,
        text:options.message,

    }
    //sending mail
    await transpoter.sendMail(mailOptions);
};
module.exports = sendEmail;