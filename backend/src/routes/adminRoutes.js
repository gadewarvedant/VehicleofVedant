const express = require("express");
const { adminLogin, getAllUsers, deleteUser } = require("../controllers/adminController");
const adminProtect = require("../middlewares/adminMiddleware");

const router = express.Router();

router.post("/login", adminLogin); // Admin Login
router.get("/users", adminProtect, getAllUsers); // Get All Users (Protected)
router.delete("/users/:id", adminProtect, deleteUser); // Delete User (Protected)

module.exports = router;
