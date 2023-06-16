const app = require("./app");

const dotenv= require("dotenv");

const connectDatabase = require("./config/database")


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
