const mongoose = require("mongoose");

const AppearanceTime = mongoose.model(
  "AppearanceTime",
  new mongoose.Schema({
    Value:String
  })
);

module.exports = AppearanceTime;