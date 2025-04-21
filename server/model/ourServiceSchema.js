import mongoose, { Schema } from "mongoose"

const ourServiceSchema = new Schema({
    key: {
        type: String,
        required: true,
        unique: true, // e.g., "Business-Consulting"
      },
    title: {
        type: String
    },
    subText: {
        type: String
    },
    description: {
      type: [String], // more explicit than just "Array"
    },
    details: {
      type: [String],
    },
    image: {
        type: String
    }
})

export const OurService = mongoose.model("OurService", ourServiceSchema)