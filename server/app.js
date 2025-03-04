import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js';

dotenv.config()

const app = express();
dotenv.config({
    path: './env'
})

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(cors())

app.use('/api/v1/user', userRoute)


export { app }
