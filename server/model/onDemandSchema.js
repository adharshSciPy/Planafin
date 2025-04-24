import mongoose, { Schema } from 'mongoose'

const onDemandSchema = new Schema({
    image: {
        type: String
    },
    title: {
        type: String
    },
    summary: {
        type: String
    },
    pigment: {
        type: String
    },
    speaker: {
        type: String
    },
    attendSession: {
        type: Array
    },
    videolink:{
        type:String
    }
})

export const OnDemand = new mongoose.model("OnDemand", onDemandSchema)