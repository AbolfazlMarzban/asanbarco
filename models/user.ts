const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    phone:  {type: Number, required: true },
    name: {type: String, required: true },
    nationalNumber: { type: Number, required: false },
    businessName: { type: String, required: false },
    birthDate: { type: String, required: false },
    bankCard: { type: Number, required: false },
    profilePic: { type: String, required: false },
    nationalCardPic: { type: String, required: false },
    logoPic: { type: String, required: false }
})

export const User = models.User || model('Project', UserSchema)
