const jwt = require("jsonwebtoken");
const User = require("../models/usermodels");

const adminProtect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await User.findById(decoded.userId);

    if (!admin || admin.role !== "admin") {
      return res.status(403).json({ message: "Access denied, Admin only" });
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, invalid token" });
  }
};

module.exports = adminProtect;
