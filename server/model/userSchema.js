import mongoose, { Schema } from 'mongoose'
const ADMIN_ROLE =( process.env.ADMIN_ROLE)

const userSchema = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
    ,role:{
        type:Number,
        default:ADMIN_ROLE
    }

})


// matching admin password
userSchema.methods.isPasswordCorrect = async function (password) {
    if (password) {
        return await bcrypt.compare(password, this.password);
    }
    next();
};

export const User = mongoose.model('User', userSchema)