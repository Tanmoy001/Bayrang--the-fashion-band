const Product = require("../models/peoductModel");
const errorHander = require("../utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError");
const Apifeatures = require("../utils/apifeatures");

//Create  -- Admin
exports.createProduct = catchAsyncError( async(req,res,next)=>{
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        status:"success",
        message:"Product created successfully",
        product
    })
})

//Get all products

exports.getAllProduct=catchAsyncError( async(req,res,next)=>{
    const productCount = await Product.countDocuments();

    const apifeatures = new Apifeatures(Product.find(),req.query)
    .search()
    .filter()
    .pagination();
    const products = await apifeatures.query;
    res.status(200).json({
        status:"success",
        products
    })
})
//Get product

exports.getProduct=catchAsyncError( async(req,res,next)=>{ 
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new errorHander("Product not found",404));
            }
            res.status(200).json({
                status:"success",
                product,
                })
        })

//Update the product

exports.updateProduct = catchAsyncError( async(req,res,next)=>{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindandModify:true});
    if(!product){
        
        return next(new errorHander("Product not found",404));
    }
    res.status(200).json({
        status:"success",
        message:"Product updated successfully",
        product
        })
})

//Delete a product

exports.deleteProduct = catchAsyncError( async(req,res,next)=>{
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
        
        return next(new errorHander("Product not found",404));
            }
            res.status(200).json({
                status:"success",
                message:"Product deleted successfully",
                })

})