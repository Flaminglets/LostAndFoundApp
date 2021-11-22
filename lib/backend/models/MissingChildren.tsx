// Using ES6 imports
import mongoose from 'mongoose';

const missingChildrenSchema = new mongoose.Schema(
    {
        name: String,
        imageUrl: String,
        weight: String,
        dateOfBirth: String,
        missingDate: String,
        missingLocation: String,
        eyeColour: String,
        hairColour: String,
        height: String,
        additionalInfo: String
    }
);

export default mongoose.models.MissingChildren || mongoose.model('MissingChildren', missingChildrenSchema);