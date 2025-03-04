import connectMongoDB from "./mongoDB/index.js";
import { app } from "./app.js"

const PORT = process.env.PORT || 8000
connectMongoDB()
    .then(() => {
        app.listen(PORT || 8000, () => {
            console.log("Server is running on port", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log("Mongodb connection error", err)
    })