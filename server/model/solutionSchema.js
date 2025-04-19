import mongoose, { Schema } from 'mongoose'


const solutionSchema = new Schema({
    heading: {
        type: String
    },
    description: {
        type: String
    },
    descriptionPoints: {
        type: Array
    }
})

export const Solution = mongoose.model("Solution", solutionSchema)