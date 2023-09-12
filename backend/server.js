const app = require("./app");

const dotenv= require("dotenv");

const connectDatabase = require("./config/database")

const cloudinary = require('cloudinary');

//Uncaught error/Exception
process.on("uncaughtException", (err) => {
    console.log(`Uncaught Exception: ${err.message}`);
    console.log("Shutting down the server because of uncaught error");
    process.exit(1)
});

//config
dotenv.config({path:"backend/config/config.env"})

//connect to database
connectDatabase();
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME ,  //your cloud
    api_key :process.env.CLOUDINARY_API_KEY,   // your api key
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on "http://localhost:${process.env.PORT}`);
})


//Unhandled Promise Rejection

process.on("unhandledRejection",err=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting done the server due to unhandled promise rejection");
    server.close(()=>{
    process.exit(1);
    });


})
