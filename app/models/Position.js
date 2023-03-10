const mongoose = require("mongoose");

const Position = mongoose.model(
  "Position",
  new mongoose.Schema({
    Value:String
  })
);

module.exports = Position;