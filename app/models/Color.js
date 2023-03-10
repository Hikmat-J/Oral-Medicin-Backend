const mongoose = require("mongoose");

const Color = mongoose.model(
  "Color",
  new mongoose.Schema({
    Value:String
  })
);

module.exports = Color;