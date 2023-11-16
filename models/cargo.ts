const { Schema, model, models } = require("mongoose");

const cargoSchema = new Schema({
    origin:  {type: String, required: true },
    desination: {type: String, required: true },
    barnameh: { type: Boolean, required: false },
    carrier: { type: Array, required: false },
    feeType: { type: String, required: false },
    suggestedFee: {type: Number, required: false},
    cargoType: { type: String, required: false },
    weightType: { type: String, required: false },
    loadingTime: { type: String, required: false },
    dischargeTime: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    loadingDate: {type: Array, required: false},
    selectedDay: {type: Array, required: false},
    comments: {type: String, required: false},
    regDate: {type: String, required: false},
    regTime : {type: String, required: false},
    userRegID: {type: String, required: false},
    regType: {type: String, required: false},
    special: {type: Boolean, required: false},
    
})

export const cargo = models.cargo || model('cargo', cargoSchema)
