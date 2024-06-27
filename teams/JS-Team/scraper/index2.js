import axios from "axios";

import {JSDOM} from "jsdom";

const response = await axios.get('https://www.ecellnitb.in/teams/index.html')

const receivedHTML = response.data

// console.log(receivedHTML.slice(0, 100));

const dom = new JSDOM(receivedHTML)

console.log(dom.window.document);

const allCards = dom.window.document.querySelectorAll('#teams>.row>.teams-column');

const ScrapedData = [];

for (let col of Array.from(allCards)){
    
    ScrapedData.push({
        imgLink : col.children[0].children[0].src,
        personName : col.querySelector('.card-body>.card-title').innerHTML,
        personVertical : col.querySelector('.card-body>.big-position-text').innerHTML,
        linkedin : col.querySelector('.icons').children[0]?.href,
        insta : col.querySelector('.icons').children[1]?.href,
        mail : col.querySelector('.icons').children[2]?.href
    })

}

console.log(ScrapedData);
