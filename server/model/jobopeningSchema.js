import mongoose, { Schema } from "mongoose";

const jobopeningSchema = new Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    workSchedule: { type: String, required: true },
    jobType: { type: String, required: true },
    workTime: { type: String, required: true },
    requiredSkills: [{ type: String }],
})

export const JobOpening = new mongoose.model("JobOpening", jobopeningSchema)