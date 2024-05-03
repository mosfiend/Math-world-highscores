const mongoose = require("mongoose");
const connection = process.env.MONGO_URI;
mongoose
  .connect(connection)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("bruh", err));
