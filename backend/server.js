const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

connectDB(); // Connect to the database
// Initialize the Express application

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
// Middleware to parse JSON requests

app.use(errorHandler);
// Error handling middleware
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
