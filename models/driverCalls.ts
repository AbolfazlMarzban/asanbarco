const { Schema, model, models } = require("mongoose");

const driverCallsSchema = new Schema({
    cargoId:  {type: String, required: true },
    driverId: {type: String, required: true },
    reqDate: { type: String, required: true },
    reqTime: { type: String, required: true },
})

export const driverCalls = models.driverCalls || model('driverCalls', driverCallsSchema)
