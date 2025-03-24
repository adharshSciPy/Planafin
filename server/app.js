import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()

const app = express();
dotenv.config({
    path: './env'
})

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(cors())

app.use('/api/v1/user', userRoute)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

export { app,__dirname }
