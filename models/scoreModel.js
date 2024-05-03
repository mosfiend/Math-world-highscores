const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = Schema(
  {
    name: {
      type: String,
      required: [true, ""],
    },
    score: {
      type: Number,
      required: [true, ""],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Score", scoreSchema);
