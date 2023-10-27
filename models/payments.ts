const { Schema, model, models } = require("mongoose");

const paymentsSchema = new Schema({
    userID:  {type: String, required: true },
    date: {type: String, required: true },
    amount: { type: Number, required: true },
    time: { type: String, required: true },
})

export const payments = models.payments || model('payments', paymentsSchema)
