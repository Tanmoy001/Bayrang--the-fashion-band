const express = require("express");
const { newOrder, getSingleOrder, myOrder, getAllOrder, updateOrderStatus, deleteOrder } = require("../controllers/oderControlller");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser,newOrder);
router.route("/order/:id").get(isAuthenticatedUser,getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser,myOrder);

//acess by the admin 

router.route("/admin/orders").get(isAuthenticatedUser,authorizeRoles("admin"),getAllOrder);
router.route("/admin/order/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateOrderStatus)
                                 .delete(isAuthenticatedUser,authorizeRoles("admin",deleteOrder))   ;




module.exports= router;