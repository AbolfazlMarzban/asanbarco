const { Schema, model, models } = require("mongoose");

const walletSchema = new Schema({
    userID:  {type: String, required: true },
    date: {type: String, required: true },
    amount: { type: Number, required: true },
    time: { type: String, required: true },
})

export const wallet = models.wallet || model('wallet', walletSchema)
