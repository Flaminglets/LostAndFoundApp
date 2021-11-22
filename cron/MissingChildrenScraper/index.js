const cheerio = require('cheerio');
const got = require('got');

const baseURL = 'https://missingkids.ca';

// TODO: make this function use generateURL (it's a more specialized version of it)
function generatePostsURL(pageNumber = 1) {
    return `https://missingkids.ca/en/missing-children-database/?page=${pageNumber}&q=&order_by=-missing_since#mcd-listing`;
};

function generateURL(path) {
    return `${baseURL}/${path}`
};

function extractPageLinks(body) {
    const $ = cheerio.load(body);

    const webLinks = $('.mcd-listing__link');
    const links = [];
    for (const link of webLinks) {
        // remove / at beginning
        // TODO: use if condition to be safer
        const url = generateURL(link.attribs.href.substr(1));

        links.push(url);
    }

    return links;
};

async function extractLinks() {
    let links = [];
    for (let i = 1; true; ++i) {
        const url = generatePostsURL(i);
        let response;
        try {
            response = await got(url);
        } catch (error) {
            // assume 404 not found
            break;
        }

        const { body } = response;
        const pageLinks = extractPageLinks(body);

        links = links.concat(pageLinks);
    }

    return links;
}

function extractImage(body) {
    const $ = cheerio.load(body);
    const missingImage = $('.missing-child-pic__img');
    const firstImage = missingImage['0']
    const url = generateURL(firstImage.attribs.src.substring(1));

    return url;
}

async function extractDetail(url) {
    // TODO: consider general cheerio load function from URL
    // does cheerio have loadFromURL?
    const response = await got(url);
    const { body } = response;

    const $ = cheerio.load(body);
    const details = $('.missing-child__details > dd');
    const descriptors = $('.missing-child__details > dt');
    const name = $('#main-content > h1').text();
    const imageURL = extractImage(body);
    const { length } = details;
    const object = {
        name,
        imageURL
    };

    for (let i = 0; i < length; ++i) {
        const index = `${i}`;
        const detail = details[index];
        const descriptor = descriptors[index];
        for (let i = 0; i < detail.children.length; ++i) {
            const child = detail.children[i];
            const text = $(child).text();
            const propertyName = $(descriptor.children[i]).text().slice(0, -1);

            if (propertyName === 'Weight') {
                object.weight = text;
            } else if (propertyName === 'Additional information') {
                object.info = text;
            } else if (propertyName === 'Date of birth') {
                object.dateOfBirth = text;
            } else if (propertyName === 'Missing since') {
                object.missingDate = text;
            } else if (propertyName === 'Missing from') {
                object.missingLocation = text;
            } else if (propertyName === 'Eyes') {
                object.eyeColour = text;
            } else if (propertyName === 'Hair') {
                object.hairColour = text;
            } else if (propertyName === 'Height') {
                object.height = text;
            } else {
                console.log('unknown property found', propertyName);
            }
        }
    }

    return object;
};

async function getWebsiteData() {
    const links = await extractLinks();
    //const data = [];

    console.time("thisTime")

    const data = await Promise.all(
        links.map((link) => extractDetail(link))
    )
    // for (const link of links) {
    //     const details = await extractDetail(link);
    //     //console.log(details);

    //     data.push(details);
    // }

    console.timeEnd("thisTime")

    //console.log(JSON.stringify(data));
    //console.log(data);
    return data;
}



// everyday get the data from website.
// get data from database.
// compare db and data to prevent uploading duplicates.
// if not in database then add to database.
async function compareData() {
    const websiteData = await getWebsiteData();
    const data = websiteData.forEach(element => console.log(element.imageURL));
    // get the imageURL from each missing children data.
    // check if the imageURL is in the database
    // if not then create new entry in database with all the details.
}


async function startJob() {
    compareData();

}

startJob();
