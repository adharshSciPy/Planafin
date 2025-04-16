import mongoose, { Schema } from 'mongoose'
const solutionSchema = new Schema({
    heading: {
        type: String
    },
    description: {

    }
})

export const Solution = mongoose.model("Solution", solutionSchema)