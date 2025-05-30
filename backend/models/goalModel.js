const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    // The user field is a reference to the User model, which allows us to associate each goal with a specific user.
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);
const Goal = mongoose.model("Goal", goalSchema);
module.exports = Goal;
// This code defines a Mongoose schema and model for a "Goal" entity. The schema specifies that each goal has a required text field, and timestamps will be automatically added to each document. The model is then exported for use in other parts of the application.
