import mongoose, { Schema } from "mongoose";

const consultationSchema = new Schema({
  consultation: {
    type: String,
    required: true,
  },
});

const planafinConsultationSchema = new Schema({
  consultations: {
    type: [consultationSchema],
    required: true,
  },
});

export default mongoose.model("PlanafinConsultation", planafinConsultationSchema);