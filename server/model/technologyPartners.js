import mongoose,{Schema} from "mongoose";
const technologyPartners=new Schema({
    techPartnersImg:{
        type:String,
        required:true
    }
})
export default mongoose.model("Technology Partners",technologyPartners)