import axios from "axios";
import { parse } from 'node-html-parser'

const response = await axios.get('https://www.ecellnitb.in/teams/index.html')

const receivedHTML = response.data

const root = parse(receivedHTML.slice(15,)) // remove unwanted <!DOCTYPE HTML> tag

const allRows = root.querySelector('#faq').querySelector(".full-team");

let allRecords = [];

// for some reason, the HTML parser have child nodes indexed from 1
// and only continues in odd indexes.

for (let i=1; i<=23; i+=2){
    for (let j=1; j<=7; j+=2){
        let imgLink = "./" + allRows.childNodes[i].childNodes[j].querySelector('img').attributes.src
        let personName = allRows.childNodes[i].childNodes[j].querySelector('.card-title').innerText
        let personVertical = allRows.childNodes[i].childNodes[j].querySelector('.big-position-text').innerText
        let linkedin = allRows.childNodes[i].childNodes[j].querySelector('.icons').childNodes[1].attributes.href
        let insta = allRows.childNodes[i].childNodes[j].querySelector('.icons').childNodes[3].attributes.href
        let mail = allRows.childNodes[i].childNodes[j].querySelector('.icons').childNodes[5].attributes.href
        
        allRecords.push({imgLink,personName,personVertical, linkedin,insta, mail})
        
    }
}

console.log(allRecords);