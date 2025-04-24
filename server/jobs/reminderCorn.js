import nodemailer from "nodemailer";
import cron from "node-cron";
import { upcomingWebinar } from "../model/upcomingwebinarSchema.js";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

cron.schedule("*/30 * * * * *", async () => {
  const today = new Date();

  const webinars = await upcomingWebinar.find();

  for (const webinar of webinars) {
    // const targetDate = new Date(webinar.webinarDate);
    // targetDate.setDate(targetDate.getDate() - webinar.remindBeforeDays);

    const isToday = webinar.webinarDate.toDateString() === today.toDateString();

    if (isToday) {
      for (let user of webinar.usersRegistered) {
        if (!user.reminded) {
          const startDate = new Date(webinar.webinarDate);
          const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour duration

          const formatDate = (date) =>
            date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

          const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//Webinar Reminder//EN
BEGIN:VEVENT
UID:${Date.now()}@yourdomain.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${webinar.name}
DESCRIPTION:Join us for the webinar: ${webinar.name}
LOCATION:Online
END:VEVENT
END:VCALENDAR`;

          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: `Reminder: "${webinar.name}" is coming up!`,
            text: `Hi ${user.name}, just a heads up — your webinar "${webinar.name}" is happening on ${startDate.toDateString()}.`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                  <h2 style="color: #333;">📅 Webinar Reminder</h2>
                  <p style="font-size: 16px; color: #555;">
                    Hi <strong>${user.name}</strong>,
                  </p>
                  <p style="font-size: 16px; color: #555;">
                    Just a quick reminder that your webinar <strong>"${webinar.name}"</strong> is scheduled for <strong>${startDate.toDateString()}</strong>.
                  </p>
                  <p style="font-size: 16px; color: #555;">
                    We're excited to have you join us!
                  </p>
                  <hr />
                </div>
              </div>`,
            attachments: [
              {
                filename: "webinar-invite.ics",
                content: icsContent,
                contentType: "text/calendar",
              },
            ],
          };

          try {
            await transporter.sendMail(mailOptions);
            console.log(`Reminder sent to ${user.email}`);
            user.reminded = true;
          } catch (err) {
            console.error(`Email failed for ${user.email}:`, err);
          }
        }
      }
      await webinar.save();
    }
  }
});
