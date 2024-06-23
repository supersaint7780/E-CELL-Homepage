// Script which populates the team page with cards of 2nd year team

// Members' data in JSON format(Scraped from previous version using scraper present in this repo):-
const data = [
    {
      imgLink: './team_images/Abhinav Ashok.webp',
      personName: 'Abhinav Ashok',
      personVertical: 'Content Writer',
      linkedin: 'https://www.linkedin.com/in/abhinav-ashok-2163b0290',
      insta: 'https://www.instagram.com/abhi.nav_4?igsh=MXR1N25taDh3eWc4MA==',
      mail: 'mailto:abhinav.ashok04@gmail.com'
    },
    {
      imgLink: './team_images/Gauri.webp',
      personName: 'Gauri Gupta',
      personVertical: 'Content Writer',
      linkedin: 'https://www.linkedin.com/in/gauri-gupta-238b1b290/',
      insta: 'https://www.instagram.com/gauriii_17/',
      mail: 'mailto:gaurii1703@gmail.com'
    },
    {
      imgLink: './team_images/Rashika Agrawal.webp',
      personName: 'Rashika Agrawal',
      personVertical: 'Content Writer',
      linkedin: 'https://www.linkedin.com/in/rashika-agrawal-709811290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: '#',
      mail: 'mailto:rashikaagrawal8428@gmail.com'
    },
    {
      imgLink: './team_images/Arundhatii Saxena.webp',
      personName: 'Arundhatii Saxena',
      personVertical: 'Content Writer',
      linkedin: 'https://www.linkedin.com/in/arundhatii-saxena-62ab3b282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/arundhatiisaxena?igsh=bndqanlrODRkN3dy',
      mail: 'arundhatii.saxena@gmail.com'
    },
    {
      imgLink: './team_images/Muskan Yadav.webp',
      personName: 'Muskan Yadav',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/muskan-yadav-934798290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/muskan0o0_?igsh=MTJ6emJ3MGtzMTZlNQ==',
      mail: 'mailto:mymuskanyadav05@gmail.com'
    },
    {
      imgLink: './team_images/Nikita Chakraborty.webp',
      personName: 'Nikita Chakraborty',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/nikita-chakraborty-01057b290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/nikitachakraborty_/',
      mail: 'mailto:niki.chakraborty2005@gmail.com'
    },
    {
      imgLink: './team_images/Dev Bansal.webp',
      personName: 'Dev Bansal',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/dev-bansal-22a54a282/',
      insta: 'https://www.instagram.com/db_devbansal/',
      mail: 'mailto:bansaldev894@gmail.com'
    },
    {
      imgLink: './team_images/RUDRAKSHA POL.webp',
      personName: 'Rudraksh Pol',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/rudraksha-pol-5b3680312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://instagram.com/rudraksha _2835/',
      mail: 'mailto:rudrakshapol@gmail.com'
    },
    {
      imgLink: './team_images/Animeshbohare.webp',
      personName: 'Animesh Bohare',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/animesh-bohare-b97988301',
      insta: '#',
      mail: 'mailto:rismeshbohare@gmail.com'
    },
    {
      imgLink: './team_images/samridhi goyal.webp',
      personName: 'Samridhi Goyal',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/samridhi-goyal-ab24a6290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/samridhi_018/',
      mail: 'mailto:goyalsamridhi2005@gmail.com'
    },
    {
      imgLink: './team_images/Vibha Lodhi.webp',
      personName: 'Vibha Lodhi',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/vibha-lodhi',
      insta: 'https://www.instagram.com/vibhalodhi765?igsh=MTFwZmN3MWFkemF2Nw==',
      mail: 'mailto:lodhivibha765@gmail.com'
    },
    {
      imgLink: './team_images/Kuhu Agrawal.webp',
      personName: 'Kuhu Agarwal',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/kuhu-agrawal-2859a127b',
      insta: 'https://www.instagram.com/kuhuagrawal51?igsh=N2N3YnY2dzN0bHl5',
      mail: 'mailto:kuhupihu33@gmail.com'
    },
    {
      imgLink: './team_images/akanksha jaiswal.webp',
      personName: 'Akanksha Jaiswal',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/akanksha-jaiswal-3439a5282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/akanksha.jaiswal23?igsh=MXgydmNrcXJobnBjYw==',
      mail: 'mailto:akanksha230412@gmail.com'
    },
    {
      imgLink: './team_images/Gurleen Kaur Bhatia.webp',
      personName: 'Gurleen Kaur Bhatia',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/gurleen-kaur-bhatia-8613a2290/',
      insta: 'https://instagram.com/gurleenkaurbhatia_/',
      mail: 'mailto:gurleenbhatia211359@gmail.com'
    },
    {
      imgLink: './team_images/Hiya Sanghvi.webp',
      personName: 'Hiya Sanghvi',
      personVertical: 'Event Manager',
      linkedin: 'http://www.linkedin.com/in/hiya-sanghvi10',
      insta: 'https://instagram.com/_._hiyaaa_._/',
      mail: 'mailto:hiyasanghvi037@gmail.com'
    },
    {
      imgLink: './team_images/Chinmay Solanki.webp',
      personName: 'Chinmay Solanki',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/chinmay-solanki-609454267',
      insta: 'https://instagram.com/Chinmay_is/',
      mail: 'mailto:solankichinmay8@gmail.com'
    },
    {
      imgLink: './team_images/Ashwin.webp',
      personName: 'Ashwin Gothwal',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/ashwin-gothwal-a5280a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/ashwin.6511?igsh=MWpveHBwMWxpZ3prNg==',
      mail: 'mailto:ashwingothwal428@gmail.com'
    },
    {
      imgLink: './team_images/Yatharth Daheriya.webp',
      personName: 'Yatharth Daheriya',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/yatharth-daheriya-37358927b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/_yatharth_04?igsh=MXhydWtvbDJqbng5ZQ==',
      mail: 'mailto:yashdeharia459@gmail.com'
    },
    {
      imgLink: './team_images/Khushi Verma.webp',
      personName: 'Khushi Verma',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/khushi-verma-966416290',
      insta: 'https://www.instagram.com/_khushi_.verma?igsh=ZzJjY25uZ2JrdDI3',
      mail: 'mailto:kv6265@gmail.com'
    },
    {
      imgLink: './team_images/Meet Lad.webp',
      personName: 'Meet Lad',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/meet-lad-7ab37728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/_.meeeet._?igsh=bTM1MmlhamI4ZnVw',
      mail: 'mailto:m333t1075@gmail.com'
    },
    {
      imgLink: './team_images/Harsh malik.webp',
      personName: 'Harsh Malik',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/harsh13malik',
      insta: 'https://www.instagram.com/harsh_._malik?igsh=MXI4NXhqdjcxYmlvaA==',
      mail: 'mailto:harshmalik96433@gmail.com'
    },
    {
      imgLink: './team_images/Kumar Anil.webp',
      personName: 'Samar Singh',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/samar-singh-46750b237?trk=contact-info',
      insta: 'https://instagram.com/_samar_singh020',
      mail: 'mailto:anilkdee250@gmail.com'
    },
    {
      imgLink: './team_images/Shubham Omray.webp',
      personName: 'Shubham Omray',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/shubham-omray-199518268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/shubhamomray/',
      mail: 'mailto:imshubhamomray@gmail.com'
    },
    {
      imgLink: './team_images/Shantanu Chouksey.webp',
      personName: 'Shantanu Chouksey',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/shantanu-chouksey-30535a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/shantanuchouksey/',
      mail: 'mailto:tanu050207@gmail.com'
    },
    {
      imgLink: './team_images/Sanskar Sharma.webp',
      personName: 'Sanskar Sharma',
      personVertical: 'Event Manager',
      linkedin: 'https://linkedin.com/in/sanskarnitb/',
      insta: 'https://www.instagram.com/_sanskarsharma_?igsh=dGs0ZWc1M3RlcGIw',
      mail: 'mailto:sanskar140404@gmail.com'
    },
    {
      imgLink: './team_images/gaurvint.webp',
      personName: 'Gaurvint Verma',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/gaurvint-verma-554329302/',
      insta: 'http://instagram.com/gaurvint',
      mail: 'mailto:gaurvint@gmail.com'
    },
    {
      imgLink: './team_images/Tanisha Gangrade.webp',
      personName: 'Tanisha Gangrade',
      personVertical: 'Event Manager',
      linkedin: '#',
      insta: 'https://instagram.com/tanisha_gangrade',
      mail: 'mailto:tanishagangrade29@gmail.com'
    },
    {
      imgLink: './team_images/Manu GS Parmar.webp',
      personName: 'Manu GS Parmar',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/manugsparmar/',
      insta: 'https://www.instagram.com/manuxparmar/',
      mail: 'mailto:manugsparmar@gmail.com'
    },
    {
      imgLink: './team_images/Snehal Terdalkar.webp',
      personName: 'Snehal Terdalkar',
      personVertical: 'Event Manager',
      linkedin: 'https://www.linkedin.com/in/snehal-terdalkar-74466b290',
      insta: 'https://instagram.com/_snehal _2610',
      mail: 'mailto:snehalterdalkar@gmail.com'
    },
    {
      imgLink: './team_images/Shreyansh Awasthi.webp',
      personName: 'Shreyansh Awasthi',
      personVertical: 'Event Manager',
      linkedin: '#https://www.linkedin.com/in/shreyansh-awasthi-1545792b2',
      insta: 'https://www.instagram.com/shreyansh_awasthi007?igsh=cHozYmFzbWM4dng=',
      mail: 'mailto:shreyanshawasthi66@gmail.com'
    },
    {
      imgLink: './team_images/Harsh Prakash.webp',
      personName: 'Harsh Prakash',
      personVertical: 'Sponsorship Executive',
      linkedin: 'https://www.linkedin.com/in/harsh-prakash-b83810290/',
      insta: 'https://www.instagram.com/harsh.prakash49/',
      mail: 'mailto:prakash.harsh49@gmail.com'
    },
    {
      imgLink: './team_images/Nitesh Kumar.webp',
      personName: 'Nitesh Kumar',
      personVertical: 'Sponsorship Executive',
      linkedin: '#',
      insta: '#',
      mail: 'mailto:niteshkumar.ecell@gmail.com'
    },
    {
      imgLink: './team_images/Shivam Pawar.webp',
      personName: 'Shivam Anant Pawar',
      personVertical: 'Sponsorship Executive',
      linkedin: 'https://www.linkedin.com/in/shivam-pawar-868166280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://instagram.com/shivam_pawar05',
      mail: 'mailto:shivamapawar05@gmail.com'
    },
    {
      imgLink: './team_images/Pratham.webp',
      personName: 'Pratham Chaturvedi',
      personVertical: 'Sponsorship Executive',
      linkedin: 'https://www.linkedin.com/in/pratham-chaturvedi-19486b2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/pratham_9772?igsh=MXFtbWNzY25xYXJ1Zg==',
      mail: 'mailto:prathamchaturvedi3718@gmail.com'
    },
    {
      imgLink: './team_images/Nachiket Bakshi.webp',
      personName: 'Nachiket Bakshi',
      personVertical: 'Sponsorship Executive',
      linkedin: 'https://www.linkedin.com/in/BakshiNachiket',
      insta: 'https://instagram.com/nachiketbakshi',
      mail: 'mailto:nachiket11bakshi@gmail.com'
    },
    {
      imgLink: './team_images/Ayush Verma.webp',
      personName: 'Ayush Verma',
      personVertical: 'Video Editor',
      linkedin: '#',
      insta: '#',
      mail: 'mailto:vayush0704@gmail.com'
    },
    {
      imgLink: './team_images/Sanket Gawande.webp',
      personName: 'Sanket Gawande',
      personVertical: 'Video Editor',
      linkedin: 'https://www.linkedin.com/in/sanket-gawande-a8629a281',
      insta: 'https://www.instagram.com/321sanket?igsh=bWVibnU3MmluZmFi',
      mail: 'mailto:sanketgawande989@gmail.com'
    },
    {
      imgLink: './team_images/Sannidhya Srivastava.webp',
      personName: 'Saanidhya Srivastava',
      personVertical: 'Video Editor',
      linkedin: 'https://www.linkedin.com/in/sannidhya-srivastava-4976a9277/',
      insta: 'https://www.instagram.com/_sann1dh_/',
      mail: 'mailto:sannidhya123567@gmail.com'
    },
    {
      imgLink: './team_images/Tarun Jaiswal.webp',
      personName: 'Tarun Jaiswal',
      personVertical: 'Video Editor',
      linkedin: 'https://in.linkedin.com/in/tarun-jaiswal-1602822b1',
      insta: 'https://instagram.com/tarunjaiswal621',
      mail: 'mailto:jaiswalt54@gmail.com'
    },
    {
      imgLink: './team_images/Tuba Rehman.webp',
      personName: 'Tuba Rehman',
      personVertical: 'Graphic Designer',
      linkedin: '#',
      insta: 'https://instagram.com/tun4.aaa',
      mail: 'mailto:tubarehman545@gmail.com'
    },
    {
      imgLink: './team_images/sravan.webp',
      personName: 'Sravandev I K',
      personVertical: 'Graphic Designer',
      linkedin: 'http://www.linkedin.com/in/sravandev-i-k',
      insta: 'https://www.instagram.com/i.k.______?igsh=MXY3ZWh6OXl5ZmU2aQ==',
      mail: 'mailto:iksravandev02@gmail.com'
    },
    {
      imgLink: './team_images/Geet Talati.webp',
      personName: 'Geet Talati',
      personVertical: 'Graphic Designer',
      linkedin: '#',
      insta: 'https://instagram.com/_geet14/',
      mail: 'mailto:geett590@gmail.com'
    },
    {
      imgLink: './team_images/Krish Shukla.webp',
      personName: 'Krish Shukla',
      personVertical: 'Graphic Designer',
      linkedin: 'https://www.linkedin.com/in/krish-shukla-037a9b307/',
      insta: 'https://www.instagram.com/shukrishh/',
      mail: 'mailto:shuklakrish215@gmail.com'
    },
    {
      imgLink: './team_images/Nihira Agrawal.webp',
      personName: 'Nihira Agarwal',
      personVertical: 'Graphic Designer',
      linkedin: 'https://www.linkedin.com/in/nihira-agrawal-587810290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/nihira_1006?igsh=eW9lZ3ZjdXM2eW0x',
      mail: 'mailto:kian071005@gmail.com'
    },
    {
      imgLink: './Images-Team/man.webp',
      personName: 'Sachin Singh',
      personVertical: 'Graphic Designer',
      linkedin: '#',
      insta: '#',
      mail: '#'
    },
    {
      imgLink: './team_images/Nidhi Singh Thakur.webp',
      personName: 'Nidhi Singh Thakur',
      personVertical: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/nidhi-singh-thakur-17a69a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/_nidhiix_?igsh=MWgzc3BpYm9tYndndQ==',
      mail: 'mailto:pvt.nidhisingh07@gmail.com'
    },
    {
      imgLink: './team_images/Mohammad Maasir.webp',
      personName: 'Mohammad Maasir',
      personVertical: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/maasir554',
      insta: 'https://instagram.com/maasir554',
      mail: 'mailto:maasir554@gmail.com'
    },
    {
      imgLink: './team_images/Sanskar Shrivastava.webp',
      personName: 'Sanskar Shrivastava',
      personVertical: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/sanskar-shrivastava-813322206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta: 'https://www.instagram.com/sanskar.shrivastava_95?igsh=a2VpbWEyemwweXRv',
      mail: 'mailto:snskrshrvstv@gmail.com'
    }
  ]

  //element in which cards are to be made
const container = document.getElementById('more-team-cards');

const columns = 4; // It is fixed that each row would have 4 columns (Cards)

const rows = Math.ceil(data.length / columns) // Required number of rows

for (let i=0; i<rows; i++){

    const rowElement = document.createElement('div')
    rowElement.className = i==rows-1 ? "row last-row" : "row"

    container.appendChild(rowElement) // Add newly created div as a child to #modre-team-cards element that is already present in DOM
    
    for(let j=0; j<columns; j++ ){
        
      const personData = data[columns*i + j] // columns*i + j is conversion of index to linear form to access data list
        
        rowElement.innerHTML += `
        
        <div class="teams-column col-lg-3  col-md-6 col-sm-12">
            <div class="card card-1 text-dark  ">
                
                <div class="image-encloser">
                    <img class="blur-img" src="${personData.imgLink}" alt="Card image cap">
                    <img class="main-img" src="${personData.imgLink}" alt="Card image cap">
                </div>
                
                <div class="card-body">
                        <h3 class="card-title">${personData.personName}</h3>
                        <h4 class="big-position-text">${personData.personVertical}</h4>
                    <div class="icons">
                        <a href="${personData.linkedin}"><i class="footer-icon fa-brands fa-linkedin fa-2x" aria-hidden="true"></i></a>
                        <a href="${personData.insta}"><i class="footer-icon fa-brands fa-instagram fa-2x " aria-hidden="true"></i></a>
                        <a href="${personData.mail}"><i class="footer-icon fa-solid fa-envelope fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
      `    
    }
}
