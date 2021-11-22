import mongoose from 'mongoose';
import MissingChildren from './models/MissingChildren';

const uri = process.env.MONGODB_URL;


export async function createMissingChildrenPost(
     name, imageUrl, weight, dateOfBirth, missingDate, missingLocation,
     eyeColour, hairColour, height, additionalInfo
) {
     const client = mongoose.connect(uri);
     const poster = await new MissingChildren({
          name,
          imageUrl,
          weight,
          dateOfBirth,
          missingDate,
          missingLocation,
          eyeColour,
          hairColour,
          height,
          additionalInfo
     });

     return poster.save();
}


export async function getMissingChildrens() {
     const client = mongoose.connect(uri);
     const kids = await MissingChildren.find();

     return kids;
}