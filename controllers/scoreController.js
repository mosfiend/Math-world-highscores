const Score = require("../models/scoreModel");
// @desc    Set trial
// @route   POST /api/trials
// @access  Private
const setScore = (req, res) => {
  const score = Score.create({
    name: "new",
    score: 25,
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
