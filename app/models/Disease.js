const mongoose = require("mongoose");

const Disease = mongoose.model(
    "Disease",
    new mongoose.Schema({
        name: String,
        discription: String,
        diagnosis: String,
        treatment: String,
        appearanceTime: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "AppearanceTime"
            }
        ,

        color: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Color"
            }
        ],
        comorbidities: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comorbidities"
            }
        ],
        edges: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Edges"
            }
        ],
        images: [
            {
                path:String,
                caption:String
            }
        ],
        pain: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Pain"
              },
        position: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Position"
            }
        ],
        sprawl: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Sprawl"
            }
        ],
        spreadSpeed:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SpreadSpeed"
            },
        texture: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Texture"
            }
        ],
        createdAt: Date
    })
);

module.exports = Disease;