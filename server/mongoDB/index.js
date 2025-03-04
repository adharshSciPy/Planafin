import mongoose from "mongoose";
const connectMongoDB = async () => {
    const mongoUrl = process.env.MONGO_URL
    try {
        const connect = await mongoose.connect(mongoUrl)
        console.log(`mongodb connected success @ host: ${connect.connection.host}`)
    } catch (error) {
        console.log(`mongodb connection failed due to : ${error}`)
        process.exit(1) // exit the process with an error code
    }
}

export default connectMongoDB;