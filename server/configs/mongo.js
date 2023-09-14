const mongoose = require("mongoose");

module.exports = async function db() {
  await mongoose.connect("mongodb://localhost:27017/renosystems");
  console.log("Connected to DB");
};
