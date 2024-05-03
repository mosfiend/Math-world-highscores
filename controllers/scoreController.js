const Score = require("../models/scoreModel");
// @desc    Set trial
// @route   POST /api/scores
// @access  Private
const setScore = (req, res) => {
  const score = Score.create({
    name: req.body.name,
    score: req.body.score,
  });

  res.status(200).json(score);
};

const getScore = (req, res) => {
  const score = Score.create({
    name: "him",
    score: 30,
  });
};

module.exports = {
  getScore,
  setScore,
};
