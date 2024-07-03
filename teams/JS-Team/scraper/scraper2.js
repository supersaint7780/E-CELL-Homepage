import puppeteer from "puppeteer";

// making a function to extract name of sponsor from its website linik:

/**
 * @param {string} url
 */

function extractName(url){
    url = url.replace('https://','');
    url = url.replace('http://','');
    url = url.replace('www.','');
    url = url.split('.')[0]
    return url;
}


(async () =>{
    const browser = await puppeteer.launch();
    
    const page = await browser.newPage();
    
    await page.goto('https://esummit.ecellnitb.in/');

    // NOTE: The evaluate function will operate in the context of browser opened by puppeteer
    // Scraping data from The E-Summit 24' page:-
    const NewSponsors = await page.evaluate(() => {
        const cards = document.querySelector('.sponsor-image-container');
        let ans = [];
        Array.from(cards.children).forEach(elem =>{
            ans.push({
                website: elem.children[0].href,
                imageSource: (elem.children[0].children[0].src).replace('https://esummit.ecellnitb.in','.')
            })
        })
        return ans;
    });
    
    // For Old Sponsors[Main ecell website]:
    await page.goto('https://ecellnitb.in/');

    const OldSponsors = await page.evaluate(() => {
        const cards = document.querySelector('#sponsorIcons');
        
        let ans = [];
        Array.from(cards.children).forEach(elem =>{
            let imgSrc = (elem.children[0].children[0].src).replace('https://www.ecellnitb.in','.');
            ans.push({
                website: elem.children[0].href,
                imageSource: imgSrc 
            });
        })
        return ans;
    });
    
    await browser.close(); // close browser ad no longer required.
    
    let allSponsors = []; // List that will contain all the sponsors, all NO DUPLICATES

    NewSponsors.forEach(spn => allSponsors.push({name:extractName(spn.website), ...spn}));
    
    // add entries from oldSponsors List, but avoiding those which have same name as that of entries already present
    for (let elem of OldSponsors){
        if (!NewSponsors.some(spon => extractName(spon.website) == extractName(elem.website))) allSponsors.push({name: extractName(elem.website),...elem})
    }

    console.log(":::::::::::::::::::::::::::CONCATENATED LIST :::::::::::::::::::::::::::::::::::::");
    console.log(allSponsors);

}
)()
