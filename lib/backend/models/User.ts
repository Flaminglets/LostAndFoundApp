// Using ES6 imports
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
        {
                fname: String,
                lname: String,
                email: String,
                age: Number,
        }
);

export default mongoose.models.User || mongoose.model('User', userSchema);