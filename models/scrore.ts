const { Schema, model, models } = require("mongoose");

const ScoreSchema = new Schema({
    userID:  {type: String, required: true },
    date: {type: String, required: true },
    Score: { type: Number, required: true },
    time: { type: String, required: true },
})

export const Score = models.Score || model('Score', ScoreSchema)
