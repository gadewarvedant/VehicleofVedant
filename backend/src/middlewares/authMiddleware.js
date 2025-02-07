const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) {
    token = token.split(" ")[1]; // Extract token from "Bearer <token>"

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret");
      req.user = { userId: decoded.userId }; // Attach user ID to the request
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized, invalid token",
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "Unauthorized, no token provided",
    });
  }
};

module.exports = protect;