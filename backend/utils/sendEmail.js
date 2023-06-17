
const nodeMailer = require("nodemailer")

const sendEmail = async(options)=>{
    const transpoter = nodeMailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        service:process.env.SMTP_SEIVICE,
        auth:{
            user:process.env.SMTP_MAIL,
            pass:process.env.SMTP_PASSWORD,

        },
    });
    const mailOptions ={
        from:process.env.SMTP_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,

    }
    //sending mail
    await transpoter.sendMail(mailOptions);
};
module.exports = sendEmail;