import mongoose, { Schema } from "mongoose";
const featureSchema=new Schema({
    features:{
        type:String,
        required:true
    }
})
const solutionAccelerators=new Schema({
    title:{
        type:String,
        required:true
    },
    
    features:{
        type:[featureSchema],
        required:true
    }
})
export default mongoose.model('Solution Accelerators',solutionAccelerators);