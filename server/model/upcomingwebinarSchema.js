import mongoose, { Schema } from "mongoose"

const upcomingwebinarSchema = new mongoose.Schema({
  name: String,
  webinarDate: Date,
  remindBeforeDays: Number,
  usersRegistered: [
    {
      name: String,
      email: String,
      reminded: { type: Boolean, default: false }
    }
  ]
});

export const upcomingWebinar = mongoose.model('upcomingWebinar', upcomingwebinarSchema);
