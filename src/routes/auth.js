const express = require("express");

const router = express.Router();

const auth = require("../modules/product/controller/auth.controller");
const {
  accessValidation,
  authorization,
} = require("../middlewares/auth.middlewares");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.put(
  "/role-assignment",
  accessValidation,
  authorization("ADMIN"),
  auth.adminRoleAssignment
);

module.exports = router;
