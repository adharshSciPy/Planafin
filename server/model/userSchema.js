import mongoose, { Schema } from 'mongoose'

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

})


// matching admin password
userSchema.methods.isPasswordCorrect = async function (password) {
    if (password) {
        return await bcrypt.compare(password, this.password);
    }
    next();
};

export const User = mongoose.model('User', userSchema)