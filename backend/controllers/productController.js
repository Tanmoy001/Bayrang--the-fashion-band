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


//Create a new review if it is already exits than update it 

exports.createProductReview = catchAsyncError(async(req,res,next)=>{
    
    const {rating,comment,productId}=req.body;

    const review = {
        user:req.user._id,
        name:req.user.name,
        rating:Number(rating),
        comment
    };

    
    const product = await Product.findById(productId)

    if(!product){
        return next (new errorHander("Product not found ",401))
    }

    const isReviewed = product.reviews.find((rev)=> rev.user.toString() === req.user._id.toString());


    if(isReviewed){
        //update the existing one
        product.reviews.forEach((rev)=>{
            if(rev.user.toString()===req.user._id.toString()){
                (rev.rating = rating),(rev.comment=comment);
            }
        });
    }
    else{
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length
    }
    let avg=0;
     product.reviews.forEach(rev=>{
        avg+=rev.rating;
    })
    avg/=product.reviews.length;
    product.ratings =avg;

    await product.save({validateBeforeSave:false});
    res.status(200).json({
        success:true,
        message:"Review uploaded"
    })
    
    
})

//get all reviews

exports.getAllReviews = catchAsyncError(async(req,res,next)=>{
    
    const product = await Product.findById(req.query.id);

    if(!product){
        return next(new errorHander("Product not found",404));
    }

    res.status(200).json({
        success:true,
        reviews:product.reviews,
    });
});


//delete reviews 

exports.deleteReview = catchAsyncError(async(req,res,next)=>{
    
    const product = await Product.findById(req.query.productId);
    if(!product){
        return next(new errorHander("Product does not exit",404));
    }
    //remove review from the array
    const reviews = product.reviews.filter((rev)=> rev._id.toString()!==req.query.id.toString());
    
    //for rating
    let avg=0;
     reviews.forEach((rev)=>{
        avg+=rev.rating;
    })
    avg/=reviews.length;
   const ratings =avg;

    const numOfReviews = reviews.length;
    
    await Product.findByIdAndUpdate(req.query.productId, {
        reviews:reviews,
        ratings:ratings,
        numOfReviews:numOfReviews,
    },
    {
        new:true,
        useFindandModify:false,
    });
    
    res.status(200).json({
        success:true,
        message:"review is modified",
    });
    
});