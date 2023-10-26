const { Schema, model, models } = require("mongoose");

const ScoreSchema = new Schema({
    userID:  {type: String, required: true },
    score: { type: Number, required: true },
})

export const Score = models.Score || model('Score', ScoreSchema)
