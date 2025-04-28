import mongoose, { Schema } from "mongoose";

const watchnowSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    businessEmail: {
        type: String,
        required: true,
        // match: [
           
        //     /^(?!.*@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|protonmail\.com|icloud\.com)$).+@.+\..+$/,
        //     "Please use your business email address"
        // ]
    },
    companyName: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    selectCountry: {
        type: String,
        required: true
    }
})

export const WatchNow = mongoose.model("watchNowSchema", watchnowSchema)