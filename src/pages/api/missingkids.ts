import * as cheerio from 'cheerio';
import { createPoster } from '../../../lib/backend/missingchildren';

export default async function scrapehandler(req, res) {
     if (req.method === 'POST') {
          try {
               const response = await fetch('https://missingkids.ca/en/missing-children-database/?q=&order_by=-missing_since#mcd-listing');
               const htmlString = await response.text();
               const $ = cheerio.load(htmlString)

               $('.mcd-listing__child').each((i, el) => {
                    const kidName = $(el).find('.mcd-listing__name').text().replace(/\s\s\s+/g, '');
                    const link = $(el).find('.mcd-listing__link').attr('href');
                    console.log(kidName);
                    console.log(link);
               });

               res.statusCode = 200; // Found page.
               return;

          } catch (e) {
               res.statusCode = 404; // Page not found.
               return res.json({
                    error: 'Page not found.'
               })
          }
     }
}

// Scrape periodically, store locally
// We could scrape the targets only periodically, 
// but instead of rebuilding the page, we would store the results (either in a database or by any other means). 
// Our page would then use this data to build its contents (either on the server-side or by an API call).
// While being the most flexible approach and quite performant, we face the problem of high complexity and lots of moving parts in this.