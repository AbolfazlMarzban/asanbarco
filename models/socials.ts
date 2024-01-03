const { Schema, model, models } = require("mongoose");

const SocialsSchema = new Schema({
    asanbartelegram:  {type: String, required: false },
    asanbarinstagram: {type: String, required: false },
    asanbarcotelegram:  {type: String, required: false },
    asanbarcoinstagram: {type: String, required: false }
})

export const Socials = models.Socials || model('Socials', SocialsSchema)
