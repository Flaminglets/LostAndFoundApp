import mongoose from 'mongoose';
import CredentialUser from './models/CredentialUser';

const uri = process.env.MONGODB_URL;

export async function findUserCredentialEmail(aEmail) {
    const client = await mongoose.connect(uri);
    const emailCredential = await CredentialUser.findOne({ email: aEmail }).exec();

    return emailCredential;
}

export async function createCredentialsForUser(username, email, password) {
    const client = await mongoose.connect(uri);
    const user = new CredentialUser(
        {
            username,
            email,
            password,
        }
    )

    return user.save();
}