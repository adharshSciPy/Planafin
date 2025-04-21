import mongoose, { Schema } from 'mongoose'
const serviceCounter=new Schema({
    counter:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
})
export default mongoose.model("Service Counter",serviceCounter);