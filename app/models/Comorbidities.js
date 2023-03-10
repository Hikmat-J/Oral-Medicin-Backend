const mongoose = require("mongoose");

const Comorbidities = mongoose.model(
  "Comorbidities",
  new mongoose.Schema({
    Value:String
  })
);

module.exports = Comorbidities;