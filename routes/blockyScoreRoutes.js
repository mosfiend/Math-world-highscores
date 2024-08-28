const express = require("express");
const router = express.Router();
const { getScore, setScore } = require("../controllers/scoreController");

router.route("/blocky").post(setScore).get(getScore);
// router.get("/", getMe);
// router.get("/", testMe);

module.exports = router;
