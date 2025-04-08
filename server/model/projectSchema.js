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

export const Project = new mongoose.model("Project", projectSchema)
