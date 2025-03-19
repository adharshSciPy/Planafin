import mongoose, { Schema } from "mongoose";

const jobApplication = new Schema({
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
    resume:{
        type: String
    },
    currentCompany:{
        type: String
    },
    linkedIn:{
        type: String
    },
    xUrl:{
        type: String
    },
    github:{
        type: String
    },
    protfolio:{
        type: String
    },
    information:{
        type: String
    }
})

export const JobApplication = mongoose.model("JobApplication", jobApplication)