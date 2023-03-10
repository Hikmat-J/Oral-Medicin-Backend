const mongoose = require("mongoose");

const Edge = mongoose.model(
  "Edge",
  new mongoose.Schema({
    Value:String
  })
);

module.exports = Edge;