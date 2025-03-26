import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema({
    profileImg: {
        type: Array
    }
})

export const Employee = mongoose.model("Employee", employeeSchema);