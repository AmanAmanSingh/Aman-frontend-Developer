const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();


router.post("/signup", UserController.SignUp);

router.post("/signin", UserController.SignIn);



module.exports = router;