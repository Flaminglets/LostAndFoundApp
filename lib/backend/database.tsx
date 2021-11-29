import mongoose from 'mongoose';
import User from './models/User';
import Addpost from './models/Addpost';

// By Danny, Nicole @Flaminglets
// This page represents the database for the website.
// It provides APIs and other pages methods of getting data from MongoDB/backend.
// Uses mongoose library to connect our models and database


const uri = process.env.MONGODB_URL;


// Finds a post by ID and puts in new data.
// @params postID that takes a unique missing poster id from database.
// @params newData that takes a newData object that contains information used to modify existing poster.
// @return post that has been modified.
export async function updatePost(postID, newData) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findByIdAndUpdate(postID, newData, { new: true })
    return post;
}

// Finds a post by ID and deletes it.
// @params postID that takes a unique missing poster id from database.
// @return post that has been deleted.
export async function deletePost(postID) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findByIdAndDelete(postID);
    return post;
}

// Find a post by type (pet/person). 
// @params postType that takes a string for pet or person.
// @return post with the specified type property.
export async function getPostByType(postType) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.find({ type: postType }).exec();

    return post;
}

// Separating user data from other user data
// @params postID that takes a unique missing poster id from database.
// @return post that is associated/filtered with the given userID.
export async function getPostByUserID(userID) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.find({ user: userID }).exec();

    return post;
}

// Get a specific user from the database
// @params user that is a object that contains data.
// @return users that is existing in the database or newly created user.
export async function getUser(user) {
    // connect to the client
    const client = await mongoose.connect(uri);
    let users = await User.findOne(user);

    if (!users) {
        users = await createUser(user.name, user.email, user.image);
    }

    return users;
};

// Creates a new user 
// @params name that is the full name of the user.
// @params email that is an electronic mail address of the user.
// @params image that is a profile picture of the user.
// @return users that has been saved on the database.
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

// Get multiple posters
// @return many missing posters from the database.
export async function getAddPosts() {
    const client = mongoose.connect(uri);
    const addposts = await Addpost.find()
    return addposts;
}

// Find one poster
// @params aPostID is a unique id associated with a missing poster.
// @return post is the found missing poster that has the given unique id.
export async function getSinglePost(aPostID) {
    const client = await mongoose.connect(uri);
    const post = await Addpost.findById(aPostID);

    return post;
}

// Create a missing poster
// @params type the specific string for a person or a pet
// @params date the month, day, year of the missing poster
// @params time the estimated hour, minute, AM/PM of the missing poster
// @params location the general area where the person was last seen
// @params lostFname the missing person's first name
// @params lostLname the missing person's last name
// @params gender the missing person's gender
// @params otherGender the missing person's specified special gender
// @params age the missing person's age
// @params weight the missing person's weight in kg
// @params height the missing person's height in cm
// @params eyecolor the missing person's eye color
// @params additional the missing person's extra information 
// @params image the missing person's physical apparence
// @params userFname the user's first name who created the post
// @params userLname the user's last name who created the post
// @params phoneNum the user's phone number who created the post
// @params email the user's email address who created the post
// @params userID the user's unique account id used to make the post
// @return None
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

