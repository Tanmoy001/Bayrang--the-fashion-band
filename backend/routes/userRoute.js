const express = require("express");
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword, updateUserProfile, getAllUser, getSingleUser, updateUser, deleteUser } = require("../controllers/userController");
const router = express.Router(); 
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logoutUser);

router.route("/me").get(isAuthenticatedUser,getUserDetails);

router.route("/me/updatepassword").put(isAuthenticatedUser,updatePassword);

router.route("/me/updateprfile").put(isAuthenticatedUser,updateUserProfile);

//admin panal

router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUser);

router.route("/admin/user/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getSingleUser);

router.route("/admin/user/update/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateUser);

router.route("/admin/user/delete/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUser);




module.exports=router;

