const express = require("express");
const app = express()
const errorMiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser");
app.use(express.json())
app.use(cookieParser())
//Route imports
//**For the Product */
const product = require("./routes/productRoute");
app.use("/api/v1",product)

//**For the aUTHENTICATION */
const user = require("./routes/userRoute");
app.use("/api/v1",user)

//Middleware for error
app.use(errorMiddleware);

module.exports = app