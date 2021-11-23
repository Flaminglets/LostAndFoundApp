import mongoose from 'mongoose';
import User from './models/User';
import Addpost from './models/Addpost';

const uri = process.env.MONGODB_URL;


// Finds a post by ID and puts in new data.
export async function updatePost(postID, newData) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findByIdAndUpdate(postID, newData, { new: true })
    return post;
}

// Finds a post by ID and deletes it.
export async function deletePost(postID) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findByIdAndDelete(postID);
    return post;
}

// Find a post by type (pet/person). 
export async function getPostByType(postType) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.find({ type: postType }).exec();

    return post;
}



