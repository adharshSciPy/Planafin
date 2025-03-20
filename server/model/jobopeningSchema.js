import mongoose, { Schema } from "mongoose";

const jobopeningSchema = new Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    jobDescription: { type: String, required: true },
    jobType: { type: String, required: true },
    requiredSkills: [{ type: String }],
    // responsibilities: [{ type: String }],
    // qualifications: [{ type: String }],
    // datePosted: { type: Date, default: Date.now },
    // contactEmail: { type: String, required: true },
    // contactPhone: { type: String, required: true },
    // applicationDeadline: { type: Date },
    // numberOfPositions: { type: Number, required: true },
    // salaryRange: { type: String, required: true },
    // jobStatus: { type: String, default: 'open' }
})

export const JobOpening = new mongoose.model("JobOpening", jobopeningSchema)