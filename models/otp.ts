const { Schema, model, models } = require("mongoose");

const OtpSchema = new Schema({
    phoneNumber:  {type: String, required: true },
    date: {type: String, required: true },
    OTP: { type: Number, required: true },
    time: { type: String, required: true },
})

export const Otp = models.Otp || model('Otp', OtpSchema)
