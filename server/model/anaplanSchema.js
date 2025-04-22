import mongoose, { Schema } from "mongoose";

const anaplanSchema = new Schema({
    counter: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

export default mongoose.model("Anaplan", anaplanSchema)