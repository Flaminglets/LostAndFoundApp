import mongoose from 'mongoose';
import User from './models/User';
import Addpost from './models/Addpost';

const uri = process.env.MONGODB_URL;

export async function findUserCredentialEmail(credentials) {
    const client = await mongoose.connect(uri);
    const emailCredential = await User.findOne({ credentials }).exec();

    return emailCredential;
}

export async function createCredentialsForUser(name, email, password) {
    const client = await mongoose.connect(uri);
    const user = new User(
        name,
        email,
        password,
    )

    return user.save();
}

export async function getUser(aUser) {
    // connect to the client
    const client = await mongoose.connect(uri);
    const users = await User.findOne(aUser);
    // console.log("aUserName:", aUser.name);
    // console.log("aUserEmail:", aUser.email);
    // console.log("aUserImage:", aUser.image);
    
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

export async function getAddPosts() {
    const client = mongoose.connect(uri);
    const addposts = await Addpost.find()
    return addposts;
}

export async function createAddPosts( type, date, time, location,
    lostFname, lostLname, gender, age, weight, height, eyecolor, 
    additional, userFname, userLname, phoneNum, email)
{
    const client = mongoose.connect(uri);
    const addpost = await new Addpost(
        {
            type, date, time, location,
            lostFname, lostLname, gender, age, weight, 
            height, eyecolor, additional, userFname, 
            userLname, phoneNum, email
        }
    )

    return addpost.save()

}


export async function updatePost(postID, newData) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findByIdAndUpdate(postID, newData, {new: true})
    return post;
}

export async function deletePost(postID) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findByIdAndDelete(postID);
    return post;
}



