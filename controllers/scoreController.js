const Score = require("../models/scoreModel");
// @desc    Set trial
// @route   POST /api/scores
// @access  Private
const setScore = (req, res) => {
  const score = Score.create({
    name: req.body.name,
    score: req.body.score,
  });
  console.log("respond", req.body);
  res.status(200).json({ other: "hi", reqBody: req.body || "nothing" });
};

const getScore = async (req, res) => {
  const scores = await Score.find({});

  console.log("if found:", req, res);

  res.status(200).json({ other: "hi", bod: req.body || "nothing" });
};

// @access  Private

module.exports = {
  getScore,
  setScore,
};
