import * as cheerio from 'cheerio';

export default function Home() {
    return (
        <div>
            <h1>Scrape</h1>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await fetch('https://missingkids.ca/en/missing-children-database/?q=&order_by=-missing_since#mcd-listing');
    const html = await response.text();
    const $ = cheerio.load(html);

    $('.mcd-listing__child').each((i, el) => {
        const kidName = $(el).find('.mcd-listing__name').text().replace(/\s\s\s+/g, '');
        const link = $(el).find('.mcd-listing__link').attr('href');
        //const imageLink = $(el).find('.mcd-listing__img').attr('style').replace(/background-image:url/g, '');
        //const missingFrom = $(el).find('.mcd-listing__missing-from').text().replace(/Missing from:/g, '');
        console.log(kidName);
        console.log(link);
        //console.log(imageLink);
        //console.log(missingFrom);
    });


    return {
        props: {}
    };
};
