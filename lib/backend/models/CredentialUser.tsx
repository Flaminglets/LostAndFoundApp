// Using ES6 imports
import mongoose from 'mongoose';

const credentialUserSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        image: String,
        posts : [
            {type: mongoose.Schema.Types.ObjectId, ref:'addpost'}
        ],
    }
);

export default mongoose.models.credentialUser || mongoose.model('credentialUser', credentialUserSchema);