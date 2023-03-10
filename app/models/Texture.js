const mongoose = require("mongoose");

const Texture = mongoose.model(
  "Texture",
  new mongoose.Schema({
    Value:String
  })
);

module.exports = Texture;