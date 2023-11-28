const { Schema, model, models } = require("mongoose");

const driversSchema = new Schema({
    phoneNumber:  {type: Number, required: true },
    familiarCode: {type: Number, required: false},
    fullName: {type: String, required: false },
    nationalNumber: { type: Number, required: false },
    birthDate: { type: Object, required: false },
    location: { type: Object, required: false },
    bankCard: { type: Number, required: false },
    fleetSmartNumber: {type: Number, required: false},
    driverSmartNumber: {type: Number, required: false},
    profilePic: {type: String, required: false},
    nationalCardPic: {type: String, required: false},
    smartCardPic: {type: String, required: false},
    shebaCode: {type: Number, required: false},
    comments: {type: String, required: false }
})

export const drivers = models.drivers || model('drivers', driversSchema)
