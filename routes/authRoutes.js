const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControllers");

router.get("/login", authController.userLogin);

router.post("/login", authController.userLoginPost);

router.get("/register", authController.userRegister);

router.post("/register", authController.userRegisterPost);

module.exports = router;
