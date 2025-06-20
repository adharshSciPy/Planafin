import nodemailer from "nodemailer";
import cron from "node-cron";
import { upcomingWebinar } from "../model/upcomingwebinarSchema.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import baseUrl from "../baseUrl.js";
import { DateTime } from "luxon";

dotenv.config();

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Cron job runs every minute (adjust to hourly/daily in production)
cron.schedule("0 0 * * *", async () => {
  const now = DateTime.now().setZone("Asia/Kolkata").startOf("day");

  try {
    const webinars = await upcomingWebinar.find();

    for (const webinar of webinars) {
      const webinarDate = DateTime.fromJSDate(webinar.webinarDate, { zone: "Asia/Kolkata" }).startOf("day");
      const targetDate = webinarDate.minus({ days: webinar.remindBeforeDays });

      if (targetDate.hasSame(now, "day")) {
        for (let user of webinar.usersRegistered) {
          if (!user.reminded) {
            if (!webinar.startTime) {
              console.warn(`Skipping "${webinar.title}" due to missing startTime.`);
              continue;
            }

            const [startHour, startMinute] = webinar.startTime.split(":").map(Number);

            const startDate = webinarDate.set({ hour: startHour, minute: startMinute });

            const formatDateTimeICS = (dt) => dt.toUTC().toFormat("yyyyLLdd'T'HHmmss'Z'");

            const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@yourdomain.com
SUMMARY:${webinar.title}
DTSTART:${formatDateTimeICS(startDate)}
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
<div style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f4; padding: 30px;">
  <div style="display: flex; justify-content:space-around; align-items:center; margin-bottom:30px;width:100%">
    <img src="cid:logo" alt="Planafin Logo" style="height: 50px;">
  </div>
  <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 30px;">
    <h2 style="color: #333; font-size: 22px; text-align: center;">🔔 Upcoming Webinar Reminder</h2>
    <p style="font-size: 16px; color: #555;">Hi <strong>${user.firstName}</strong>,</p>
    <p style="font-size: 16px; color: #555;">This is a  reminder that you are registered for the webinar:</p>
    <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
      <p style="margin: 0; font-size: 16px;">
        <strong>Topic:</strong> ${webinar.title}<br>
        <strong>Date:</strong> ${startDate.toFormat("dd LLLL yyyy")}<br>
        <strong>Time:</strong> ${startDate.toFormat("hh:mm a")}<br>
        <strong>Location:</strong> Online
      </p>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;width:100%">
      <img src="cid:webinarImage" alt="webinarImage" style="height: 150px;">
    </div>
    <p style="font-size: 16px; color: #555;">Click the button below to join:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${baseUrl}/resources" style="background-color: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
        Join Webinar
      </a>
    </div>
    <hr style="border: none; border-top: 1px solid #ddd;" />
  </div>
</div>`,
              attachments: [
                {
                  filename: "webinar-invite.ics",
                  content: icsContent,
                  contentType: "text/calendar",
                },
                {
                  filename: "logo.png",
                  path: path.join(__dirname, "../public/images/logo.png"),
                  cid: "logo",
                },
                {
                  filename: path.basename(webinar.image),
                  path: path.join(__dirname, "../", webinar.image),
                  cid: "webinarImage",
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

        await webinar.save(); // Persist updated reminded flags
      }
    }
  } catch (err) {
    console.error("Error running cron job:", err);
  }
});
