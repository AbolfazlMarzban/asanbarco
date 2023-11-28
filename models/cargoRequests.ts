const { Schema, model, models } = require("mongoose");

const cargoRequestsSchema = new Schema({
    cargoId:  {type: String, required: true },
    driverId: {type: String, required: true },
    status: {type: String, required: true},
    reqDate: { type: String, required: true },
    reqTime: { type: String, required: true },
})

export const cargoRequests = models.cargoRequests || model('cargoRequests', cargoRequestsSchema)
