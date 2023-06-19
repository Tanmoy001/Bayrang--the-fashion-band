const Order = require("../models/orderModels")

const errorHander = require("../utils/errorhander");
const catchAsyncError=require("../middleware/catchAsyncError");


//Create new order 

exports.newOrder = catchAsyncError(async(req,res,next)=>{
    const{
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    }=req.body;


    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user: req.user._id,
        paidAt:Date.now(),
    });
    res.status(201).json({
        success:true,
        order,
        });

});

//get  Single Order (for watching single order details)
exports.getSingleOrder = catchAsyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.id).populate("user","name email");
    if(!order){
        return next(new errorHander("Eror not found with this id",404));
    }
    res.status(200).json({
        success:true,
        order,
    })
})

//get  logged in user Order(for all the orders)
exports.myOrder = catchAsyncError(async(req,res,next)=>{
    const orders = await Order.find({user:req.user._id});

    res.status(200).json({
        success:true,
        orders,
    })
})

//get all orders for  ---- admin

exports.getAllOrder = catchAsyncError(async(req,res,next)=>{
    const orders = await Order.find();

    let totalAmount = 0;
    orders.forEach(order=>{
        totalAmount+=totalPrice;
    });
    res.status(200).json({
        success:true,
        orders,
    });
});

//Update Order status  ---- admin

exports.updateOrderStatus = catchAsyncError(async(req,res,next)=>{
    const orders = await Order.find(req.params.id);

    if(order.updateOrderStatus==="Delivered"){
        return next (new errorHander("Order already delivered",400));
    }


    let totalAmount = 0;
    orders.forEach(order=>{
        totalAmount+=totalPrice;
    });
    res.status(200).json({
        success:true,
        orders,
    });
});



