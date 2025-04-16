import mongoose, { Schema } from 'mongoose'
import { type } from 'os'
const solutionSchema = new Schema({
    heading: {
        type: String
    },
    description: {
        type: String
    }
})

export const Solution = mongoose.model("Solution", solutionSchema)