import mongoose,{Schema} from "mongoose";
const contentPoints=new Schema({
    contentPoints:{
        type:String,
        required:true
    }
})
const businessPlanning=new Schema({
    businessPlanningImage:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,

    },
    contentHeading:{
        type:String,
        required:true
    },
    contentDescription:{
        type:String
    } ,
    contentPoints:{
        type:[contentPoints],
        required:true
    }
},{timestamps:true})
export default mongoose.model ("Business Planing",businessPlanning)