// Using ES6 imports
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        image: String,
        // posts : [
        //     {type: mongoose.Schema.Types.ObjectId,ref:'addpost'}
        // ],
    }
);

export default mongoose.models.User || mongoose.model('User', userSchema);