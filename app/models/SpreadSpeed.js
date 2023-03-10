const mongoose = require("mongoose");

const SpreadSpeed = mongoose.model(
  "SpreadSpeed",
  new mongoose.Schema({
    Value:String
  })
);

module.exports = SpreadSpeed;