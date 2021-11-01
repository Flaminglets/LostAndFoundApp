import mongoose from 'mongoose';
import User from './models/User';

const uri = process.env.MONGODB_URL;

export async function findUserCredentialEmail(credentials) {
    const client = mongoose.connect(uri);
    const emailCredential = await User.findOne({ credentials }).exec();

    return emailCredential;
}

export async function createCredentialsForUser(name, email, password) {
    const client = mongoose.connect(uri);
    const user = new User(
        name,
        email,
        password,
    )

    return user.save();
}

export async function getUsers(aUser) {
    // connect to the client
    const client = mongoose.connect(uri);
    const users = await User.findOne(aUser);
    // console.log("aUserName:", aUser.name);
    // console.log("aUserEmail:", aUser.email);
    // console.log("aUserImage:", aUser.image);

    return users;
};


export async function createUser(name, email, image) {
    const client = mongoose.connect(uri);
    const user = new User(
        {
            name,
            email,
            image,
        }
    )

    return user.save();
};