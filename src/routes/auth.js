const express = require("express");

const router = express.Router();

const auth = require("../modules/product/controller/auth.controller");

router.post("/register", auth.register);
router.post("/login", auth.login);

module.exports = router;
