import nodemailer from "nodemailer";
import cron from "node-cron";
import { upcomingWebinar } from "../model/upcomingwebinarSchema.js";
import dotenv from "dotenv";

dotenv.config();

// Setup email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Cron job - Runs daily at midnight UTC
cron.schedule("0 0 * * *", async () => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0); // Normalize to UTC midnight

  try {
    const webinars = await upcomingWebinar.find();

    for (const webinar of webinars) {
      const targetDate = new Date(webinar.webinarDate);
      targetDate.setUTCHours(0, 0, 0, 0);
      targetDate.setUTCDate(targetDate.getUTCDate() - webinar.remindBeforeDays);

      if (targetDate.toISOString() === today.toISOString()) {
        for (let user of webinar.usersRegistered) {
          if (!user.reminded) {
            const [startHour, startMinute] = webinar.startTime.split(":").map(Number);
            const [endHour, endMinute] = webinar.endTime.split(":").map(Number);

            const baseDate = new Date(webinar.webinarDate);
            baseDate.setUTCHours(0, 0, 0, 0); // Set base to start of day UTC

            // Manually adjust IST to UTC
            const localStart = new Date(baseDate);
            localStart.setUTCHours(startHour - 5, startMinute - 30, 0, 0);

            const localEnd = new Date(baseDate);
            localEnd.setUTCHours(endHour - 5, endMinute - 30, 0, 0);

            const formatDateTimeUTC = (date) => {
              return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
            };

            const dtStart = formatDateTimeUTC(localStart);
            const dtEnd = formatDateTimeUTC(localEnd);

            const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@yourdomain.com
SUMMARY:${webinar.title}
DTSTART:${dtStart}
DTEND:${dtEnd}
DESCRIPTION:Join the webinar "${webinar.title}"
LOCATION:Online
STATUS:CONFIRMED
SEQUENCE:0
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;

            const mailOptions = {
              from: process.env.EMAIL_USER,
              to: user.businessEmail,
              subject: `Reminder: "${webinar.title}" is coming up!`,
              html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
                  <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #333;">📅 Webinar Reminder</h2>
                    <p>Hi <strong>${user.firstName}</strong>,</p>
                    <p>Your webinar <strong>"${webinar.title}"</strong> is scheduled for <strong>${localStart.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</strong>.</p>
                    <p>We're excited to have you join us!</p>
                    <hr />
                  </div>
                </div>
              `,
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
              console.log(`Reminder sent to ${user.businessEmail}`);
              user.reminded = true;
            } catch (err) {
              console.error(`Failed to send email to ${user.businessEmail}:`, err);
            }
          }
        }
        await webinar.save(); // Save reminded flags
      }
    }
  } catch (err) {
    console.error("Error running cron job:", err);
  }
});
