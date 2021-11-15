import mongoose from 'mongoose';

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
        ethnicity: String,
        additional: String,
        userFname: String,
        userLname: String,
        phoneNum: Number,
        email: String,
        // user : {type: mongoose.Schema.Types.ObjectId,ref:'User'}
    }
)

export default mongoose.models.addpost || mongoose.model('addpost', addpostSchema)