const { Schema, model, models } = require("mongoose");

const MessagesSchema = new Schema({
    userID:  {type: String, required: true },
    userType: {type:String, required: true},
    date: {type: String, required: true },
    time: { type: String, required: true },
    importance : {type: String, required: true},
    relatedUnit: {type: String, required: true},
    Messages: { type: Array, required: true },
})

export const Messages = models.Messages || model('Messages', MessagesSchema)
