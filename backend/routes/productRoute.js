const express = require("express");
const { getAllProduct, createProduct, updateProduct, deleteProduct, getProduct, createProductReview, getAllReviews, deleteReview} = require("../controllers/productController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const router = express.Router();

//Get all products
router.route("/products").get(getAllProduct);
//Get Product
router.route("/product/:id").get(getProduct);


//Post for createProduct --Admin
router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);
//Put for updating product
router.route("/product/update/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct);
//Delete a product
router.route("/product/delete/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);


//Product reviews
router.route("/product/review").put(isAuthenticatedUser,createProductReview);
//getall reviews
router.route("/reviews").get(getAllReviews).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteReview);

module.exports=router