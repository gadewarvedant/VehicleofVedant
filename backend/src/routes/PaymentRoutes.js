const express = require("express");
const { createOrder, verifyPayment } = require("../controllers/PaymentController");

const router = express.Router();

// Route to create an order
router.post("/create-order", createOrder);

// Route to verify payment
router.post("/verify-payment", verifyPayment);

module.exports = router;
