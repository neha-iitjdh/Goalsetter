const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
// Middleware to parse JSON requests

app.use(errorHandler);
// Error handling middleware
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
