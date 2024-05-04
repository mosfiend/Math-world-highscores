const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = Schema(
  {
    name: {
      type: Schema.Types.Mixed,
      required: [true, ""],
      // unique: true,
    },
    score: {
      type: Number,
      required: [true, ""],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Score", scoreSchema);
