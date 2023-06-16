const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,"Please Enter product Name"]
    },
    description:{
        type:String,
        required :[true,"Please Enter product description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter product Price"],
        maxLength:[8,"Price cann't exceed 8 character"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        { 
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
],
    category:{
        type:String,
        required:[true,"Please enter Product Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter product stock"],
        maxLength:[4,"Stock cann't exceed 4 character"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            review:{
                type:String,
                required:true,
        
            },
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Product",productSchema);