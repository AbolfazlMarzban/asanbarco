const { Schema, model, models } = require("mongoose");

const ScoreSchema = new Schema({
    userID:  {type: String, required: true },
    date: {type: String, required: true },
    score: { type: Number, required: true },
    reason: {type: String, required: true},
    time: { type: String, required: true },
})

export const Score = models.Score || model('Score', ScoreSchema)
