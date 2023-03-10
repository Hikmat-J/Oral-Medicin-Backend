const mongoose = require("mongoose");

const Pain = mongoose.model(
  "Pain",
  new mongoose.Schema({
    Value: String,
  })
);

module.exports = Pain;