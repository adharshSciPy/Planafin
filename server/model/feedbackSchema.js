import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema({
    image: {
        type: String
    },
    name: {
        type: String
    },
    jobPosition: {
        type: String
    },
    message: {
        type: String
    }
})

export const Feedback = mongoose.model("Feedback", feedbackSchema)