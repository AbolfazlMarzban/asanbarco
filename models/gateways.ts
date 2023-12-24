const { Schema, model, models } = require("mongoose");

const GatewaysSchema = new Schema({
    asanbargateway:  {type: String, required: false },
    asanbarcogateway: {type: String, required: false }
})

export const Gateways = models.Gateways || model('Gateways', GatewaysSchema)
