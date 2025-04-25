import mongoose, { Schema } from "mongoose";

const upcomingwebinarSchema = new mongoose.Schema({
  name: String,
  webinarDate: Date,
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
  },
  usersRegistered: [
    {
      name: String,
      email: String,
      reminded: { type: Boolean, default: false },
    },
  ],
});

export const upcomingWebinar = mongoose.model(
  "upcomingWebinar",
  upcomingwebinarSchema
);
