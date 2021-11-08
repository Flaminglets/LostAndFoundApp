// Using ES6 imports
import mongoose from 'mongoose';

const scrapePosterSchema = new mongoose.Schema(
    {
        name: String,
        details: [{
            DOB: String,
            missingSince: String,
            location: String,
            eyes: String,
            hair: String,
            height: Number,
            weight: Number,
            additionalInfo: String,
            image: String,
        }],
        
    }
);

export default mongoose.models.ScrapePoster || mongoose.model('ScrapePosters', scrapePosterSchema);