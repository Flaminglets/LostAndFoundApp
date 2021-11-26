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

//separating user data from other user data
export async function getPostByUserID(userID) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.find({ user: userID }).exec();

    return post;
}

export async function getUser(user) {
    // connect to the client
    const client = await mongoose.connect(uri);
    const users = await User.findOne(user);

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

