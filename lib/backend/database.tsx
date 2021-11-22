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

// Get multiple post 
export async function getAddPosts() {
    const client = mongoose.connect(uri);
    const addposts = await Addpost.find()
    return addposts;
}

// Find one post
export async function getSinglePost(aPostID) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findById(aPostID);

    return post;
}

// Create a post

export async function createAddPosts(type, date, time, location, lostFname, lostLname, gender, otherGender, age, weight, height, eyecolor, additional, image, userFname, userLname, phoneNum, email, userID) {
    const client = mongoose.connect(uri);
    const addpost = await new Addpost(
        {
            type, date, time, location, lostFname, lostLname, gender, otherGender, age, weight, height, eyecolor, additional, image, userFname, userLname, phoneNum, email, userID
        }
    )

    await addpost.save();

    const userByID = await User.findById(userID);
    userByID.posts.push(addpost);
    await userByID.save();

    return;
}

export async function updatePost(postID, newData) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findByIdAndUpdate(postID, newData, { new: true })
    return post;
}

export async function deletePost(postID) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findByIdAndDelete(postID);
    return post;
}



