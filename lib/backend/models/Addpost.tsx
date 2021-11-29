import mongoose, { Mongoose } from 'mongoose';

// By Nicole @Flaminglets
// This page represents the Missing Poster model/schema.
// Each property has a specified type that is used to collect data.

const addpostSchema = new mongoose.Schema(
    {
        type: String,
        date: String,
        time: String,
        location: String,
        lostFname: String,
        lostLname: String,
        gender: String,
        otherGender: String,
        age: Number,
        weight: Number,
        height: Number,
        eyecolor: String,
        additional: String,
        image: String,
        userFname: String,
        userLname: String,
        phoneNum: String,
        email: String,
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }
)

export default mongoose.models.addpost || mongoose.model('addpost', addpostSchema)