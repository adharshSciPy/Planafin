import mongoose, { Schema } from "mongoose"

const industrySchema = new Schema({
    heading: {
        type: String
    },
    industryImage: {
        type: Array
    }
})

export const Industry = mongoose.model("Industry", industrySchema)