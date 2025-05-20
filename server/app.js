import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import "./jobs/reminderCorn.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
// dotenv.config({
//     path: './env'
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cors());

app.use("/api/v1/user", userRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});
export { app, __dirname };
