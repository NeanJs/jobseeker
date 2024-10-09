// server/middleware/authMiddleware.js

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", ""); // Extract token from headers
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
};

export default authMiddleware;
