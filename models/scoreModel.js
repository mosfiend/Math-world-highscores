const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = Schema(
  {
    name: {
      type: Schema.Types.Mixed,
      required: [true, ""],
      unique: true,
    },
    score: {
      type: Number,
      // required: [true, ""],
    },
  },
  {
    timestamps: true,
  },
);
Score = mongoose.model("Score", scoreSchema);
BlockyScore = mongoose.model("BlockyScore", scoreSchema);
module.exports = { Score, BlockyScore };
