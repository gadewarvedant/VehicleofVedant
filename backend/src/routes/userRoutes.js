const express = require("express");
const {
  loginUser,
  registerUser,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/usercontrollers");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

// User routes
router.post("/register", registerUser); // Register
router.post("/login", loginUser); // Login
router.get("/profile", protect, getUserProfile); // Get user profile (protected)
router.put("/profile", protect, updateUserProfile); // Update user profile (protected)
router.put("/:id", updateUser); // Update user by ID (admin)
router.delete("/:id", deleteUser); // Delete user by ID (admin)

module.exports = router;
