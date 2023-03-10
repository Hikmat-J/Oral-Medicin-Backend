const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = {
    mongoose: mongoose,
    url: dbConfig.url,
    Disease: require("./Disease"),
    AppearanceTime: require("./AppearanceTime"),
    Color: require("./Color"),
    Comorbidities: require("./Comorbidities"),
    Edges: require("./Edges"),
    Image: require("./Image"),
    Pain: require("./Pain"),
    Position: require("./Position"),
    Sprawl: require("./Sprawl"),
    SpreadSpeed: require("./SpreadSpeed"),
    Texture: require("./Texture"),

};
