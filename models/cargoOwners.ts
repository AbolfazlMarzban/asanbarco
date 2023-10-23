const { Schema, model, models } = require("mongoose");

const cargoOwnersSchema = new Schema({
    phoneNumber:  {type: Number, required: true },
    name: {type: String, required: false },
    nationalNumber: { type: Number, required: false },
    businessName: { type: String, required: false },
    birthDate: { type: Object, required: false },
    bankCard: { type: Number, required: false },
    profilePic: { type: String, required: false },
    nationalCardPic: { type: String, required: false },
    logoPic: { type: String, required: false }
})

export const cargoOwners = models.cargoOwners || model('cargoOwners', cargoOwnersSchema)
