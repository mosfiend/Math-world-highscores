const mongoose = require("mongoose");
const connection = process.env.MONGO_URI;
mongoose
  .connect(connection, { autoIndex: false })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("bruh", err));
