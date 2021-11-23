import mongoose from 'mongoose';
import User from './models/User';
import Addpost from './models/Addpost';

const uri = process.env.MONGODB_URL;

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
            type, 
            date, 
            time, 
            location, 
            lostFname, 
            lostLname, 
            gender, 
            otherGender, 
            age, 
            weight, 
            height, 
            eyecolor, 
            additional, 
            image,
            userFname, 
            userLname, 
            phoneNum, 
            email, 
            userID
        }
    )

    addpost.user = userID;
    await addpost.save();

    const userByID = await User.findById(userID);
    userByID.posts.push(addpost);
    await userByID.save();

    return;
}