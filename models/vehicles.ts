const { Schema, model, models } = require("mongoose");

const VehiclesSchema = new Schema({
    name:  {type: String, required: true },
    children: {type: Array, required: false },
})

export const Vehicles = models.Vehicles || model('Vehicles', VehiclesSchema)
