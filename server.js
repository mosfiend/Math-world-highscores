"use strict";

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

/////////// CONNECT TO Database

const connection =
  "mongodb+srv://mosfiend:lhMx2kFZmUPmzZ7r@clusterduck.bnzail0.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(connection)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("bruh", err));

// SCORE SCHEMA

app.use(cors());
app.use("/api/scores", require("./routes/scoreRoutes"));
// var GameEntry = mongoose.model("GameEntry", GameEntrySchema);
//
// function getList(gameId, options, cb) {
//   options = options || {};
//   var query = GameEntry.find({ gameId: gameId }, null, {})
//     .lean()
//     .sort({ score: options.order || -1 })
//     .limit(options.limit || 10);
//   if (options.scope) {
//     query.where("scope", options.scope);
//   }
//   query.exec(cb);
// }
//
// function addToList(gameId, attributes, cb) {
//   var item = new GameEntry(attributes);
//   item.set("gameId", gameId);
//   item.save(cb);
// }
//
// const bodyParser = require("body-parser");
// const methodOverride = require("method-override");
// app.use(bodyParser());
// app.use(methodOverride());
//
// app.get("/:gameId", function (req, res) {
//   var options = {
//     order: req.query.reverse ? -1 : 1,
//     limit: req.query.limit || 10,
//     scope: req.query.scope || null,
//   };
//   getList(req.params.gameId, options, function (err, items) {
//     res.type("application/json");
//     if (err) {
//       res.jsonp(400, { error: err.message });
//     } else {
//       res.jsonp({ items: items });
//     }
//   });
// });
//
// app.post("/:gameId", function (req, res) {
//   addToList(req.params.gameId, req.body, function (err) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.type("application/json");
//     if (err) {
//       res.send(500, { error: err.message || "Undefined error" });
//     } else {
//       res.send({ success: true });
//     }
//   });
// });

app.listen(8000);
console.log("Started server at 172.0.0.1:8000");
