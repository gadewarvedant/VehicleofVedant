const express = require("express");
const { createBooking, getAllBookings, getBookingById, deleteBooking } = require("../controllers/bookingController");

const router = express.Router();

router.post("/bookings", createBooking); // Create a new booking
router.get("/bookings", getAllBookings); // Get all bookings
router.get("/bookings/:id", getBookingById); // Get booking by ID
router.delete("/bookings/:id", deleteBooking); // Delete booking

module.exports = router;
