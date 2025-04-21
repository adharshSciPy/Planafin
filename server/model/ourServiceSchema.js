import mongoose, { Schema } from "mongoose"

const ourServiceSchema = new Schema({
    title: {
        type: String
    },
    subText: {
        type: String
    },
    details: {
        type: Array
    },
    description: {
        type: String
    }
})

export const OurService = mongoose.model("OurService", ourServiceSchema)