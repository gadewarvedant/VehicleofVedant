const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const PaymentRoutes = require("./routes/PaymentRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", bookingRoutes);
app.use("/api/payment", PaymentRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Vehicle Booking API");
});

// 404 Middleware
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

// Set dynamic port for Render deployment
const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
