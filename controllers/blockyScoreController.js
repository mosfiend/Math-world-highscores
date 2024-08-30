const Score = require("../models/scoreModel").BlockyScore;
// @desc    Set trial
// @route   POST /api/scores
// @access  Private
const setScore = (req, res) => {
  const score = Score.create({
    name: req.body.name,
    score: req.body.score,
  });
  res.status(200).json({ other: "hi", reqBody: req.body || "nothing" });
};

const getScore = async (req, res) => {
  const scores = await Score.find({});

  res.status(200).json(scores);
};

// @access  Private

module.exports = {
  getScore,
  setScore,
};
