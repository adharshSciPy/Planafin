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

// Cron job - Runs every minute (change back to "0 0 * * *" in production)
cron.schedule("* * * * *", async () => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  try {
    const webinars = await upcomingWebinar.find();

    for (const webinar of webinars) {
      const targetDate = new Date(webinar.webinarDate);
      targetDate.setUTCDate(targetDate.getUTCDate() - webinar.remindBeforeDays);

      if (targetDate.toISOString() === today.toISOString()) {
        for (let user of webinar.usersRegistered) {
          if (!user.reminded) {
            if (!webinar.startTime) {
              console.warn(`Skipping "${webinar.title}" due to missing startTime.`);
              continue;
            }

            const startDate = new Date(webinar.webinarDate);
            const [startHour, startMinute] = webinar.startTime.split(":").map(Number);
            startDate.setUTCHours(startHour, startMinute, 0, 0);

            // Set endDate to 1 hour later
            const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

            const formatDateTime = (date) =>
              date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

            const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@yourdomain.com
SUMMARY:${webinar.title}
DTSTART:${formatDateTime(startDate)}
DTEND:${formatDateTime(endDate)}
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
                    <p>Your webinar <strong>"${webinar.title}"</strong> is scheduled for <strong>${startDate.toUTCString()}</strong>.</p>
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
