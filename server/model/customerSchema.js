import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema({
    imageCustomer: {
        type: Array
    }
})

export const Customer = mongoose.model("Customer", customerSchema)