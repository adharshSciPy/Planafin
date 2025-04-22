import mongoose, { Schema } from "mongoose";

const planafinConsultationSchema = new Schema({
  title: { type: String, required: true },
  subtext: { type: String, required: true },
});

export default mongoose.model(
  "PlanafinConsultation",
  planafinConsultationSchema
);
