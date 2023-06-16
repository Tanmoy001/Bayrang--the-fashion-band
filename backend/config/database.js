const mongoose = require("mongoose");;

const connectDatabase=()=>{
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
    console.log(`Connected to MongoDB with server ${data.connection.host}`);
})
/*if catch is the then it in handled so no point of using unhandled promise rejection in server.js
 .catch((err)=>{
    console.log(err.msg);
}) */
}
module.exports = connectDatabase;