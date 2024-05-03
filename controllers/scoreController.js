const Score = require("../models/scoreModel");
// @desc    Set trial
// @route   POST /api/scores
// @access  Private
const setScore = (req, res) => {
  console.log(req.body, req);
  const score = Score.create({
    name: "hi" + score,
    score: 49,
  });

  // res.status(200).json(score);
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
