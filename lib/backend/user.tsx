import mongoose from 'mongoose';
import User from './models/User';


const uri = process.env.MONGODB_URL;

export async function getUser(aUser) {
    // connect to the client
    const client = await mongoose.connect(uri);
    const users = await User.findOne(aUser);

    return users;
};


export async function createUser(name, email, image) {
    const client = await mongoose.connect(uri);
    const user = new User(
        {
            name,
            email,
            image,
        }
    )

    return user.save();
}