const router = require('express').Router();
const UserController = require("../controller/userController")
const Auth  = require("../middleware/auth")
// routes
router.route("/login").post(UserController.login);
router.route("/register").post(UserController.register);


module.exports = router;