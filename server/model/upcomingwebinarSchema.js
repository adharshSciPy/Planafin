import mongoose, { Schema } from "mongoose";

const upcomingwebinarSchema = new mongoose.Schema({
  name: String,
  webinarDate: Date,
  startTime: {
    type: String, 
    required: true,
  },
  endTime: {
    type: String, 
    // required: true,
  },
  remindBeforeDays: Number,
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  pigment: {
    type: String,
  },
  speaker: {
    type: String,
  },
  attendSession: {
    type: Array,
    required: true,
  },
  usersRegistered: [
    {
      firstName: String,
      lastName: String,
      businessEmail: String,
      companyName: String,
      designation: String,
      selectCountry: String,
      reminded: { type: Boolean, default: false },
    },
  ],
});

export const upcomingWebinar = mongoose.model(
  "upcomingWebinar",
  upcomingwebinarSchema
);
