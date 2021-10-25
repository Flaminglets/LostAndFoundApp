import mongoose from 'mongoose';
import User from './models/User';

const uri = process.env.MONGODB_URL;

export async function getUser() {
    // connect to the client
    const client = mongoose.connect(uri);

    const user = await User.find();

    return user;
};

// this function creates a cheetah (cheetah collection in database)
export async function createCar(fname, lname, email, age) {
    const client = await mongoose.connect(uri);

    const user = new User(
        {
            fname,
            lname,
            email,
            age
        }
    );

    return user.save()
};