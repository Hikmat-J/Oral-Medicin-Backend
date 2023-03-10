const mongoose = require("mongoose");

const Sprawl = mongoose.model(
  "Sprawl",
  new mongoose.Schema({
    Value:String
  })
);

module.exports = Sprawl;