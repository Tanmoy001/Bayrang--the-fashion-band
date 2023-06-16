const express = require("express");
const { getAllProduct, createProduct, updateProduct, deleteProduct, getProduct} = require("../controllers/productController");
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
module.exports=router