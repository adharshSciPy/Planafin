import mongoose, { Schema } from "mongoose"

const KPOSchema = new mongoose.Schema(
    {
        icon: {
            type: String
        },
        image: {
            type: String
        },
        title: {
            type: String,
            trim: true,
        },
        subTitle: {
            type: String
        },
        description: {
            type: String
        },
        features: [
            {
                type: String,
                required: true,
            }
        ]
    },
    { timestamps: true }
);

export const KPO = new mongoose.model("KPO", KPOSchema);