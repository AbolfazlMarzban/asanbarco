const { Schema, model, models } = require("mongoose");

const SmsSchema = new Schema({
    asanbarsms:  {type: String, required: false },
    asanbarcosms: {type: String, required: false }
})

export const Sms = models.Sms || model('Sms', SmsSchema)
