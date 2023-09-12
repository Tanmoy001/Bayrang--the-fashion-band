const express = require("express");
const app = express()
const errorMiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(fileUpload())
//Route imports
//**For the Product */
const product = require("./routes/productRoute");
app.use("/api/v1",product)

//**For the aUTHENTICATION */
const user = require("./routes/userRoute");
app.use("/api/v1",user)

//**For the order */
const order = require("./routes/orderRoute");
app.use("/api/v1",order)


//Middleware for error
app.use(errorMiddleware);

module.exports = app