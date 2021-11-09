import mongoose from 'mongoose';
import ScrapedPosters from './models/ScrapedPosters';

const uri = process.env.MONGODB_URL;

export async function createPoster(name, details) {
     const client = mongoose.connect(uri);
     const poster = new ScrapedPosters({
          name,
          details,
     });

     return poster.save();
}

export async function getMissingKids(kid) {
     const client = mongoose.connect(uri);
     const kids = await ScrapedPosters.findOne(kid);

     return kids;
}

