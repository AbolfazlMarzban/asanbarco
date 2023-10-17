const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    phone:  {type: Number, required: true },
    name: {type: String, required: true },
    nationalNumber: { type: Number, required: false },
    businessName: { type: String, required: false },
    birthDate: { type: String, required: false }
})

export const Project = models.Project || model('Project', UserSchema)
