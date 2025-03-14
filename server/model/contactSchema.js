import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true   
    },
    country:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    jobTitle:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

export const Contact = new mongoose.model("Contact", ContactSchema)