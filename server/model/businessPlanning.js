import mongoose, { Schema } from "mongoose";

const businessPlanning = new Schema(
  {
    businessPlanningImage: {
      type: String,
      required: true,
    },
    contentImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    contentHeading: {
      type: String,
      required: true,
    },
    contentDescription: {
      type: String,
    },
    contentPoints: {
      type: Array,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Business Planing", businessPlanning);
