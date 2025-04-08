import mongoose, { Schema } from 'mongoose'

const projectSchema=new Schema({
    
    consultants:{
        type:Number
    },
    projects:{
        type:Number
    },
    cases:{
        type:Number
    }
})

export const project = new mongoose.model("OnDemand", projectSchema)
