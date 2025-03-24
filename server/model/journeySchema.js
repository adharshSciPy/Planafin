import mongoose, { Schema } from "mongoose";

const journeySchema = new Schema({
    year: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: Array
    }
})

export const Journey = new mongoose.model("Journey", journeySchema)