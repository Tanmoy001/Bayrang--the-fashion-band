const Order = require("../models/orderModels")
const Product = require("../models/peoductModel")
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
        totalAmount+=order.totalPrice;
    });
    res.status(200).json({
        success:true,
        totalAmount,
        orders,
    });
});

//Update Order status  ---- admin

exports.updateOrderStatus = catchAsyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.id);

    if(order.orderStatus === "Delivered"){
        return next (new errorHander("Order already delivered",400));
    }

    order.orderItems.forEach(async(order)=>{
        await updateStock(order.product,order.quantity,next);
    });
    order.orderStatus=req.body.status;
    if(req.body.status === "Delivered"){
        order.deliveredAt = Date.now();
    }
    await order.save({validateBeforeSave:false});
    
    res.status(200).json({
        success:true,
        
    });
});

async function updateStock(id,quality,next){
const product = await Product.findById(id);

product.Stock -= quality;
await product.save({validateBeforeSave:false});
}


//delete order ---admin

exports.deleteOrder = catchAsyncError(async(req,res,next)=>{
    const order = await Order.findById(req.params.id)

    if(!order){
        return next (new errorHander("Order not found",402));
    }
    await order.remove();
    res.status(200).json({
        success:true,
        message:"Order has been deleted"
    });
});



