const { Schema, model, models } = require("mongoose");

const aboutsSchema = new Schema({
    aboutasanbar:  {type: String, required: false },
    aboutasanbarco: {type: String, required: false }
})

export const abouts = models.abouts || model('abouts', aboutsSchema)
