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
        type: Array
    },
    image: {
        type: String
    }
})

export const OurService = mongoose.model("OurService", ourServiceSchema)