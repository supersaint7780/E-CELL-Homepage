// Script which populates the team page with cards of 2nd year team


// DATA of CORE team
const data1 = [
  {
    imgLink: 'Images-Team/Aryan Samil.webp',
    personName: 'Aryan Samil',
    personVertical: 'President',
    linkedin: 'https://www.linkedin.com/in/aryan-samil-249414276',
    insta: 'https://instagram.com/aryann__09?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:aryan.samil.54@gmail.com'
  },
  {
    imgLink: 'Images-Team/Sanjana Kumari.webp',
    personName: 'Sanjana Kumari',
    personVertical: 'Vice President',
    linkedin: 'https://www.linkedin.com/in/sanjana-kumari-3bab99258',
    insta: 'https://instagram.com/sanjanaaa._13_?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:sanjanaparul940@gmail.com'
  },
  {
    imgLink: 'Images-Team/Eashan Srivastava.webp',
    personName: 'Eashan Srivastava',
    personVertical: 'Co-Cordinator (Finance)',
    linkedin: 'https://www.linkedin.com/in/eashan-srivastava-191384255',
    insta: 'https://instagram.com/eashmo17?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:srivastavaeashan@gmail.com'
  },

  {
    imgLink: 'Images-Team/Kavish Sarse.jpg',
    personName: 'Kavish Sarse',
    personVertical: 'Co-Cordinator (Operations)',
    linkedin: 'https://www.linkedin.com/in/kavish-sarse-0819b3254',
    insta: 'https://instagram.com/kavish_sarse?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:kavishsarse121@gmail.com'
  },
  {
    imgLink: 'Images-Team/Parv Lathi.webp',
    personName: 'Parv Lathi',
    personVertical: 'Treasurer',
    linkedin: 'https://www.linkedin.com/in/parv-lathi-98201025a',
    insta: 'https://instagram.com/parvlathi?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:Parvlathi005@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ayushi Rathore.webp',
    personName: 'Ayushi Rathore',
    personVertical: 'General Secretary',
    linkedin: 'https://www.linkedin.com/in/ayushi-rathore-786141253',
    insta: 'https://instagram.com/ayushi_rrrr?igshid=NGExMmI2YTkyZg==',
    mail: 'mailto:ayushir117@gmail.com'
  },
  {
    imgLink: 'Images-Team/Manav Rao.webp',
    personName: 'Manav Rao',
    personVertical: 'General Secretary',
    linkedin: 'https://www.linkedin.com/in/manav-rao-276311260',
    insta: 'https://www.instagram.com/invites/contact/?i=1ipazvv4coz00&utm_content=ph50k86',
    mail: 'mailto:manavrao063@gmail.com'
  },
  {
    imgLink: 'Images-Team/Samarth Saxena.webp',
    personName: 'Samarth Saxena',
    personVertical: 'Sponsorship & Media Head',
    linkedin: 'https://www.linkedin.com/in/saxena2709',
    insta: 'https://instagram.com/samarth27.09?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:samarth27.09.03@gmail.com'
  },
  {
    imgLink: 'Images-Team/Laya Lodha.webp',
    personName: 'Laya Lodha',
    personVertical: 'Sponsorship & Media Head',
    linkedin: 'https://www.linkedin.com/in/laya-lodha-082b31253/',
    insta: 'https://instagram.com/layalodha/',
    mail: 'about:blank#'
  },
  {
    imgLink: 'Images-Team/cherisha jajodia.webp',
    personName: 'Cherisha Jajodia',
    personVertical: 'Events Head',
    linkedin: 'https://www.linkedin.com/in/cherisha-jajodia-49529b18a',
    insta: 'https://instagram.com/cherishajajodiaa?igshid=NTc4MTIwNjQ2YQ==',
    mail: 'mailto:cherishajajodia@gmail.com'
  },
  {
    imgLink: 'Images-Team/Kunal Vishwakarma.webp',
    personName: 'Kunal Vishwakarma',
    personVertical: 'Events Head',
    linkedin: 'https://www.linkedin.com/in/kunal-vishwakarma-2a1320261',
    insta: 'https://instagram.com/heyy_stewie?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:vkunaloff@gmail.com'
  },
  {
    imgLink: 'Images-Team/Arushi Mishra.webp',
    personName: 'Arushi Mishra',
    personVertical: 'Startup and Corporate Relations Head',
    linkedin: 'https://www.linkedin.com/in/arushi-mishra-469692251',
    insta: 'https://www.instagram.com/iamam250204/',
    mail: 'mailto:arushimishra2502@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ayushi Chouhan.webp',
    personName: 'Ayushi Chouhan',
    personVertical: 'Startup and Corporate Relations Head',
    linkedin: 'https://www.linkedin.com/in/ayushi-chouhan-3695b6277',
    insta: 'https://instagram.com/ayushii_chouhan76?igshid=MzRlODBiNWFlZA==',
    mail: 'mailto:ayushi.chouhan04@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ananya Sharma.webp',
    personName: 'Ananya Sharma',
    personVertical: 'Alumni Convener',
    linkedin: 'https://www.linkedin.com/in/ananya-sharma-937177262',
    insta: 'https://www.instagram.com/ananyaaasm/',
    mail: 'mailto:ananya2k3sharma@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ranojit Sikdar.webp',
    personName: 'Ranojit Sikdar',
    personVertical: 'Head of Operations',
    linkedin: 'https://www.linkedin.com/in/ranojit-sikdar-040540277',
    insta: 'https://instagram.com/r_a_n_o_j_i_t?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:ranojitsikdar.19.1.03@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ashish Gupta.webp',
    personName: 'Ashish Gupta',
    personVertical: 'Hospitality Head',
    linkedin: 'https://www.linkedin.com/in/ashish-gupta-19a186256',
    insta: 'https://instagram.com/beingashish_gupta?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:ashishgupta0613@gmail.com'
  },
  {
    imgLink: 'Images-Team/Keerthi Bommareddy.webp',
    personName: 'Keerthi Bommareddy',
    personVertical: 'Outreach Head',
    linkedin: 'https://www.linkedin.com/in/keerthi-bommareddy-2b567b277',
    insta: 'https://instagram.com/keerthi_bommareddy?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:keerthi.mvm@gmail.com'
  },
  {
    imgLink: 'Images-Team/Pavan Patidar.webp',
    personName: 'Pavan Patidar',
    personVertical: 'Creatives Head',
    linkedin: 'https://www.linkedin.com/in/pavan-patidar-558199258',
    insta: 'https://instagram.com/_pavanpatidar_?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:patidarpavan136@gmail.com'
  },
  {
    imgLink: 'Images-Team/Mohit Gunani.webp',
    personName: 'Mohit Gunani',
    personVertical: 'Marketing Head',
    linkedin: 'https://www.linkedin.com/in/mohit-gunani-20009124b',
    insta: 'https://instagram.com/gunanimohit?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:gunanimohit14@gmail.com'
  },
  {
    imgLink: 'Images-Team/Avantika Singh.webp',
    personName: 'Avantika Singh',
    personVertical: 'Design Head',
    linkedin: 'https://www.linkedin.com/in/avantika-singh-704a46257',
    insta: 'https://instagram.com/__.avantikaaa?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:avantikasingh03avi@gmail.com'
  },
  {
  imgLink: 'Images-Team/Anushmita Paul.webp',
  personName: 'Anushmita Paul',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/anushmita-paul-95970b259/',
  insta: 'about:blank#',
  mail: 'mailto:iam.anushmita@gmail.com'
},
{
  imgLink: 'Images-Team/Archita Singh.webp',
  personName: 'Archita Singh',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/archita-singh-815915262',
  insta: 'https://instagram.com/arc_hita1324?igshid=NGExMmI2YTkyZg==',
  mail: 'mailto:archita13singh@gmail.com'
},
{
  imgLink: 'Images-Team/Ayush Maurya.webp',
  personName: 'Ayush Maurya',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/ayush5556/',
  insta: 'https://www.instagram.com/amaurya7780/',
  mail: 'mailto:amaurya5556@gmail.com'
},
{
  imgLink: 'Images-Team/Kratika Jain.webp',
  personName: 'Kratika Jain',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/kratika-jain-944814267',
  insta: 'https://instagram.com/cratzzikaa?igshid=MzMyNGUyNmU2YQ==',
  mail: 'mailto:0201it211045@gmail.com'
},
{
  imgLink: 'Images-Team/Manas Bhutada.webp',
  personName: 'Manas Bhutada',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/manas-bhutada-203162250',
  insta: 'https://instagram.com/manasbhutada?igshid=ZDc4ODBmNjlmNQ==',
  mail: 'mailto:manasbhutada19@gmail.com'
},
{
  imgLink: 'Images-Team/Manas Chaturvedi.webp',
  personName: 'Manas Chaturvedi',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/manas-chaturvedi-a38229190/',
  insta: 'https://instagram.com/maihoomanas',
  mail: 'mailto:manasc2009@gmail.com'
},
{
  imgLink: 'Images-Team/Mayank Suryavanshi.webp',
  personName: 'Mayank Suryavanshi',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/mayank-suryawanshi-136977277',
  insta: 'https://instagram.com/mayanksuryawansi?igshid=MzMyNGUyNmU2YQ==',
  mail: 'mailto:Mayanksuryawanshi98@gmail.com'
},
{
  imgLink: 'Images-Team/Omkar Gochade.webp',
  personName: 'Omkar Gochade',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/omkar-gochade-9b7b9724a',
  insta: 'https://instagram.com/o.gochade?igshid=NGExMmI2YTkyZg==',
  mail: 'mailto:omkargochademanit@gmail.com'
},
{
  imgLink: 'Images-Team/Priyansh Malviya.webp',
  personName: 'Priyansh Malviya',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/priyansh-malviya-1a9780258',
  insta: 'https://instagram.com/_the_priyansh_malviya_?igshid=MzNlNGNkZWQ4Mg==',
  mail: 'mailto:priyanshmalviya6268@gmail.com'
},
{
  imgLink: 'Images-Team/Sai Sathwik.webp',
  personName: 'Sai Sathwik',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/sai-sathwik-pabba-56b117250',
  insta: 'https://instagram.com/sathwik_pabba?igshid=MzNlNGNkZWQ4Mg==',
  mail: 'mailto:sathwikgupta04@gmail.com'
},
{
  imgLink: 'Images-Team/Shreya Pandey.webp',
  personName: 'Shreya Pandey',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/shreya-pandey-09ba26250',
  insta: 'https://instagram.com/shreyya_9.0?igshid=NGExMmI2YTkyZg==',
  mail: 'mailto:pandeyshreya3851@gmail.com'
},
{
  imgLink: 'Images-Team/Siddak Rajpal.webp',
  personName: 'Siddak Rajpal',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/siddak-rajpal-21b32b233/',
  insta: 'https://www.instagram.com/siddakrajpal/',
  mail: 'mailto:siddakrajpal14@gmail.com'
},
{
  imgLink: 'Images-Team/Yogesh Suryavanshi.png',
  personName: 'Yogesh Ahirwar',
  personVertical: 'Executive',
  linkedin: 'https://www.linkedin.com/in/yogesh-suryavanshi-892895241',
  insta: 'https://instagram.com/yogeshsuryavanshi.in?igshid=ZDc4ODBmNjlmNQ==',
  mail: 'mailto:yogn7294@gmail.com'
},

  
  {
    "imgLink": "./team_images/Nachiket Bakshi.webp",
    "personName": "Nachiket Bakshi",
    "personVertical": "Joint Secretary",
    "linkedin": "https://www.linkedin.com/in/BakshiNachiket",
    "insta": "https://instagram.com/nachiketbakshi",
    "mail": "mailto:nachiket11bakshi@gmail.com"
  },
  {
    "imgLink": "./team_images/Khushi Verma.webp",
    "personName": "Khushi Verma",
    "personVertical": "Administrative Lead",
    "linkedin": "https://www.linkedin.com/in/khushi-verma-966416290",
    "insta": "https://www.instagram.com/_khushi_.verma?igsh=ZzJjY25uZ2JrdDI3",
    "mail": "mailto:kv6265@gmail.com"
  },
  {
    "imgLink": "./team_images/Sanskar Sharma.jpg",
    "personName": "Sanskar Sharma",
    "personVertical": "Sponsorship Lead",
    "linkedin": "https://linkedin.com/in/sanskarnitb/",
    "insta": "https://www.instagram.com/_sanskarsharma_?igsh=dGs0ZWc1M3RlcGIw",
    "mail": "mailto:sanskar140404@gmail.com"
  },
  {
    "imgLink": "./team_images/Nitesh Kumar.webp",
    "personName": "Nitesh Kumar",
    "personVertical": "Sponsorship Secretary",
    "linkedin": "https://www.linkedin.com/in/-nitesh-kumar",
    "insta": "#",
    "mail": "mailto:niteshkumar.ecell@gmail.com"
  },
  {
    "imgLink": "./team_images/Manu Parmar.jpg",
    "personName": "Manu GS Parmar",
    "personVertical": "Finance Lead",
    "linkedin": "https://www.linkedin.com/in/manugsparmar/",
    "insta": "https://www.instagram.com/manuxparmar/",
    "mail": "mailto:manugsparmar@gmail.com"
  },
  {
    "imgLink": "./team_images/Muskan Yadav.jpg",
    "personName": "Muskan Yadav",
    "personVertical": "Finance Secretary",
    "linkedin": "https://www.linkedin.com/in/muskan-yadav-934798290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/_muskann_75?igsh=MTJ6emJ3MGtzMTZlNQ==",
    "mail": "mailto:mymuskanyadav05@gmail.com"
  },
  {
    "imgLink": "./team_images/Ashwin.webp",
    "personName": "Ashwin Gothwal",
    "personVertical": "Accounts Lead",
    "linkedin": "https://www.linkedin.com/in/ashwin-gothwal-a5280a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/ashwin.6511?igsh=MWpveHBwMWxpZ3prNg==",
    "mail": "mailto:ashwingothwal428@gmail.com"
  },
  {
    "imgLink": "./team_images/Abhinav Ashok.jpg",
    "personName": "Abhinav Ashok",
    "personVertical": "Operations Lead",
    "linkedin": "https://www.linkedin.com/in/abhinav-ashok-2163b0290",
    "insta": "https://www.instagram.com/abhi.nav_4?igsh=MXR1N25taDh3eWc4MA==",
    "mail": "mailto:abhinav.ashok04@gmail.com"
  },
  {
    "imgLink": "./team_images/Sannidhya Srivastava.webp",
    "personName": "Sannidhya Srivastava",
    "personVertical": "Strategic Lead",
    "linkedin": "https://www.linkedin.com/in/sannidhya-srivastava-4976a9277/",
    "insta": "https://www.instagram.com/_sann1dh_/",
    "mail": "mailto:sannidhya123567@gmail.com"
  },
  {
    "imgLink": "./team_images/Dev Bansal.webp",
    "personName": "Dev Bansal",
    "personVertical": "Events Lead",
    "linkedin": "https://www.linkedin.com/in/dev-bansal-22a54a282/",
    "insta": "https://www.instagram.com/db_devbansal/",
    "mail": "mailto:bansaldev894@gmail.com"
  },
  {
    "imgLink": "./team_images/Hiya Sanghvi.webp",
    "personName": "Hiya Sanghvi",
    "personVertical": "Events Lead",
    "linkedin": "http://www.linkedin.com/in/hiya-sanghvi10",
    "insta": "https://instagram.com/_._hiyaaa_._/",
    "mail": "mailto:hiyasanghvi037@gmail.com"
  },
  {
    "imgLink": "./team_images/Snehal Terdalkar.webp",
    "personName": "Snehal Terdalkar",
    "personVertical": "Events Secretary",
    "linkedin": "https://www.linkedin.com/in/snehal-terdalkar-74466b290",
    "insta": "https://instagram.com/_snehal _2610",
    "mail": "mailto:snehalterdalkar@gmail.com"
  },
  {
    "imgLink": "./team_images/gaurvint.webp",
    "personName": "Gaurvint Verma",
    "personVertical": "Events Secretary",
    "linkedin": "https://www.linkedin.com/in/gaurvint-verma-554329302/",
    "insta": "http://instagram.com/gaurvint",
    "mail": "mailto:gaurvint@gmail.com"
  },
  {
    "imgLink": "./team_images/Harsh malik.webp",
    "personName": "Harsh Malik",
    "personVertical": "Public Relations Lead",
    "linkedin": "https://www.linkedin.com/in/harsh13malik",
    "insta": "https://www.instagram.com/harsh_._malik?igsh=MXI4NXhqdjcxYmlvaA==",
    "mail": "mailto:harshmalik96433@gmail.com"
  },
  {
    "imgLink": "./team_images/Gurleen Kaur Bhatia.webp",
    "personName": "Gurleen Kaur Bhatia",
    "personVertical": "Public Relations Secretary",
    "linkedin": "https://www.linkedin.com/in/gurleen-kaur-bhatia-8613a2290/",
    "insta": "https://instagram.com/gurleenkaurbhatia_/",
    "mail": "mailto:gurleenbhatia211359@gmail.com"
  },
  {
    "imgLink": "./team_images/Tanisha Gangrade.webp",
    "personName": "Tanisha Gangrade",
    "personVertical": "Startup & Investor Relations Lead",
    "linkedin": "https://www.linkedin.com/in/tanisha-gangrade-ba496028b",
    "insta": "https://instagram.com/tanisha_gangrade",
    "mail": "mailto:tanishagangrade29@gmail.com"
  },
  {
    "imgLink": "./team_images/Meet Lad.jpg",
    "personName": "Meet Lad",
    "personVertical": "Startup & Investor Relations Lead",
    "linkedin": "https://www.linkedin.com/in/meet-lad-7ab37728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/_.meeeet._?igsh=bTM1MmlhamI4ZnVw",
    "mail": "mailto:m333t1075@gmail.com"
  },
  {
    "imgLink": "./team_images/Nikita Chakraborty.webp",
    "personName": "Nikita Chakraborty",
    "personVertical": "Incubator & Accelerator Relations Lead",
    "linkedin": "https://www.linkedin.com/in/nikita-chakraborty-01057b290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/nikitachakraborty_/",
    "mail": "mailto:niki.chakraborty2005@gmail.com"
  },
  {
    "imgLink": "./team_images/Shubham Omray.webp",
    "personName": "Shubham Omray",
    "personVertical": "Alumni Relations Lead",
    "linkedin": "https://www.linkedin.com/in/shubham-omray-199518268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/shubhamomray/",
    "mail": "mailto:imshubhamomray@gmail.com"
  },
  {
    "imgLink": "./team_images/Shreyansh Awasthi.webp",
    "personName": "Shreyansh Awasthi",
    "personVertical": "Corporate Relations Lead",
    "linkedin": "#https://www.linkedin.com/in/shreyansh-awasthi-1545792b2",
    "insta": "https://www.instagram.com/shreyansh_awasthi007?igsh=cHozYmFzbWM4dng=",
    "mail": "mailto:shreyanshawasthi66@gmail.com"
  },
  {
    "imgLink": "./team_images/Shivam Pawar.webp",
    "personName": "Shivam Anant Pawar",
    "personVertical": "Corporate Relations Secretary",
    "linkedin": "https://www.linkedin.com/in/shivam-pawar-868166280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://instagram.com/shivam_pawar05",
    "mail": "mailto:shivamapawar05@gmail.com"
  },
  {
    "imgLink": "./team_images/Pratham.webp",
    "personName": "Pratham Chaturvedi",
    "personVertical": "Partnerships Lead",
    "linkedin": "https://www.linkedin.com/in/pratham-chaturvedi-19486b2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/pratham_9772?igsh=MXFtbWNzY25xYXJ1Zg==",
    "mail": "mailto:prathamchaturvedi3718@gmail.com"
  },
  {
    "imgLink": "./team_images/Nidhi Singh Thakur.webp",
    "personName": "Nidhi Singh Thakur",
    "personVertical": "Promotions Lead",
    "linkedin": "https://www.linkedin.com/in/nidhi-singh-thakur-17a69a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/_nidhiix_?igsh=MWgzc3BpYm9tYndndQ==",
    "mail": "mailto:pvt.nidhisingh07@gmail.com"
  },
  {
    "imgLink": "./team_images/Chinmay Solanki.webp",
    "personName": "Chinmay Solanki",
    "personVertical": "Promotions Secretary",
    "linkedin": "https://www.linkedin.com/in/chinmay-solanki-609454267",
    "insta": "https://instagram.com/Chinmay_is/",
    "mail": "mailto:solankichinmay8@gmail.com"
  },
  {
    "imgLink": "./team_images/Geet Talati.webp",
    "personName": "Geet Talati",
    "personVertical": "Hospitality Lead",
    "linkedin": "https://www.linkedin.com/in/geet-talati-868851285",
    "insta": "https://instagram.com/_geet14/",
    "mail": "mailto:geett590@gmail.com"
  },
  {
    "imgLink": "./team_images/Ayush Verma.webp",
    "personName": "Ayush Verma",
    "personVertical": "Resource & Procurement Lead",
    "linkedin": "https://www.linkedin.com/in/ayush-verma-53715b281",
    "insta": "https://www.instagram.com/v_ayush07/?utm_source=ig_web_button_share_sheet",
    "mail": "mailto:vayush0704@gmail.com"
  },
  {
    "imgLink": "./team_images/Mohammad Maasir.webp",
    "personName": "Mohammad Maasir",
    "personVertical": "Resource & Procurement Lead",
    "linkedin": "https://www.linkedin.com/in/maasir554",
    "insta": "https://instagram.com/maasir554",
    "mail": "mailto:maasir554@gmail.com"
  },
  {
    "imgLink": "./team_images/Tarun Jaiswal.webp",
    "personName": "Tarun Jaiswal",
    "personVertical": "Social Media Lead",
    "linkedin": "https://in.linkedin.com/in/tarun-jaiswal-1602822b1",
    "insta": "https://instagram.com/tarunjaiswal621",
    "mail": "mailto:jaiswalt54@gmail.com"
  },
  {
    "imgLink": "./team_images/Nihira Agrawal.webp",
    "personName": "Nihira Agarwal",
    "personVertical": "Social Media Lead",
    "linkedin": "https://www.linkedin.com/in/nihira-agrawal-587810290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/nihira_1006?igsh=eW9lZ3ZjdXM2eW0x",
    "mail": "mailto:kian071005@gmail.com"
  },
  {
    "imgLink": "./team_images/Kumar Anil.webp",
    "personName": "Samar Singh",
    "personVertical": "Media Lead",
    "linkedin": "https://www.linkedin.com/in/samar-singh-46750b237?trk=contact-info",
    "insta": "https://instagram.com/_samar_singh020",
    "mail": "mailto:anilkdee250@gmail.com"
  },
  {
    "imgLink": "./team_images/Shantanu Chouksey.webp",
    "personName": "Shantanu Chouksey",
    "personVertical": "Media Secretary",
    "linkedin": "https://www.linkedin.com/in/shantanu-chouksey-30535a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/shantanuchouksey/",
    "mail": "mailto:tanu050207@gmail.com"
  },
  {
    "imgLink": "./team_images/Yatharth Daheriya.webp",
    "personName": "Yatharth Daheriya",
    "personVertical": "Marketing Lead",
    "linkedin": "https://www.linkedin.com/in/yatharth-daheriya-37358927b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/_yatharth_04?igsh=MXhydWtvbDJqbng5ZQ==",
    "mail": "mailto:yashdeharia459@gmail.com"
  },
  {
    "imgLink": "./team_images/Animeshbohare.webp",
    "personName": "Animesh Bohare",
    "personVertical": "Marketing Secretary",
    "linkedin": "https://www.linkedin.com/in/animesh-bohare-b97988301",
    "insta": "#",
    "mail": "mailto:rismeshbohare@gmail.com"
  },
  {
    "imgLink": "./team_images/Krish Shukla.webp",
    "personName": "Krish Shukla",
    "personVertical": "Creatives Lead",
    "linkedin": "https://www.linkedin.com/in/krish-shukla-037a9b307/",
    "insta": "https://www.instagram.com/shukrishh/",
    "mail": "mailto:shuklakrish215@gmail.com"
  },
  {
    "imgLink": "./team_images/Gauri.webp",
    "personName": "Gauri Gupta",
    "personVertical": "Content Creation Lead",
    "linkedin": "https://www.linkedin.com/in/gauri-gupta-238b1b290/",
    "insta": "https://www.instagram.com/gauriii_17/",
    "mail": "mailto:gaurii1703@gmail.com"
  },
  {
    "imgLink": "./team_images/Tuba Rehman.jpeg",
    "personName": "Tuba Rehman",
    "personVertical": "Designing Lead",
    "linkedin": "https://www.linkedin.com/in/tuba-rehman-586103203",
    "insta": "https://instagram.com/tun4.aaa",
    "mail": "mailto:tubarehman545@gmail.com"
  },
  {
    "imgLink": "./team_images/sravan.webp",
    "personName": "Sravandev I K",
    "personVertical": "Designing Secretary",
    "linkedin": "http://www.linkedin.com/in/sravandev-i-k",
    "insta": "https://www.instagram.com/i.k.______?igsh=MXY3ZWh6OXl5ZmU2aQ==",
    "mail": "mailto:iksravandev02@gmail.com"
  },
  {
    "imgLink": "./team_images/Sachin SIingh (1).webp",
    "personName": "Sachin Singh",
    "personVertical": "Video Editing Lead",
    "linkedin": "#",
    "insta": "#",
    "mail": "#"
  },
  {
    "imgLink": "./team_images/Sanskar Shrivastava (2).png",
    "personName": "Sanskar Shrivastava",
    "personVertical": "Web Development Lead",
    "linkedin": "https://www.linkedin.com/in/sanskar-shrivastava-813322206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/sanskar.shrivastava_95?igsh=a2VpbWEyemwweXRv",
    "mail": "mailto:snskrshrvstv@gmail.com"
  },
  {
    "imgLink": "./team_images/RUDRAKSHA POL.webp",
    "personName": "Rudraksh Pol",
    "personVertical": "Commerce & Planning Lead",
    "linkedin": "https://www.linkedin.com/in/rudraksha-pol-5b3680312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://instagram.com/rudraksha _2835/",
    "mail": "mailto:rudrakshapol@gmail.com"
  }

];



// 2nd year team Members' data in JSON format(Scraped from previous version using scraper present in this repo):- now 28' team the data is from forms
const data2 = [
  {
    "imgLink": "./team_images/team_28/Bhavish Chandra.jpg",
    "personName": "Bhavish Chandra ",
    "personVertical": "Content Writer",
    "linkedin": "https://www.linkedin.com/in/bhavish-chandra-311533313",
    "insta": "bhavish_chandra",
    "mail": "mailto:bhavishchandra14431@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Sakina Latsaheb.jpeg",
    "personName": "Sakina Latsaheb",
    "personVertical": "Content Writer",
    "linkedin": "https://www.linkedin.com/in/sakina-latsaheb-34978534b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "_.sakina19",
    "mail": "mailto:sakina52.latsaheb@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Samridhi.jpg",
    "personName": "Samridhi Bhargava",
    "personVertical": "Content Writer",
    "linkedin": "https://www.linkedin.com/in/samridhi-bhargava-aab847358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/sam.ridhi_bhargava?igsh=dm8ya2g5bjkyZGp5",
    "mail": "mailto:samridhibhargava2432005@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Vishakha U.jpg",
    "personName": "Vishakha Udassi",
    "personVertical": "Content Writer",
    "linkedin": "https://www.linkedin.com/in/vishakha-udassi-ab113a348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "insta": "vishakha_2705",
    "mail": "mailto:vudassi2705@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Aryan Patel.jpg",
    "personName": "Aryan Patel ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/aryan-patel-884544318",
    "insta": "aryanpatel_2805",
    "mail": "mailto:arynpatel2016@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Anshay Chouhan.jpg",
    "personName": "Anshay Chouhan",
    "personVertical": "Event Manager",
    "linkedin": "https://www.instagram.com/18_anshay_?igsh=MXc3ajhsNmYydGhraA==",
    "insta": "https://www.instagram.com/18_anshay_?igsh=MXc3ajhsNmYydGhraA==",
    "mail": "mailto:anshaychouhan@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Ayan Khan.jpg",
    "personName": "Ayan Khan",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/ayan-khan-0a9640326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/_.ayan._.khan?igsh=MTYxNTUzb2E0Y2x3eg==",
    "mail": "mailto:ayankhanpqr0@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Shraddha Rathore.jpg",
    "personName": "Shraddha Rathore ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/shraddha-rathore-5573a7329",
    "insta": "shraddha_rathore__",
    "mail": "mailto:rathoreshraddha199@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Wali Raza.jpg",
    "personName": "Wali Raza",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/wali-raza-a01914317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/wr_hashmi?igsh=MXd0YWc3aXNoOXM5eA==",
    "mail": "mailto:walihashmi72@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Athak Ramgir.jpg",
    "personName": "Athak Ramgir ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/athak-ramgir-717a94323/",
    "insta": "https://www.instagram.com/athak_ramgir/",
    "mail": "mailto:athakramgir39@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Siddharth Sharma.webp",
    "personName": "Siddharth Sharma ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/siddharth2621?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/proto_hippie?igsh=cTdua253N3U2azdi",
    "mail": "mailto:sidsharma.bpl@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Akshara Tapariya.jpeg",
    "personName": "Akshara Tapariya",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/akshara-tapariya/",
    "insta": "https://www.instagram.com/invites/contact/?igsh=mb5pklfkiv95&utm_content=uzx9bm7",
    "mail": "mailto:tapariyaakshara07@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Muhaimin Al Saboor Rizvi.jpeg",
    "personName": "Muhaimin Al Saboor Rizvi",
    "personVertical": "Event Manager",
    "linkedin": "www.linkedin.com/in/saboor-rizvi",
    "insta": "https://www.instagram.com/sxboors",
    "mail": "mailto:muhaiminrizvi@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Aaditya Agrawal.jpg",
    "personName": "Aditya Sumit Agrawal",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/aditya-sumit-agrawal-805919325/",
    "insta": "https://www.instagram.com/iamaadi_01?igsh=MTJjZ284dms1MDg3aA==",
    "mail": "mailto:aadityagrawal01@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Aaradhya.png",
    "personName": "Aaradhya Laad ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/aaradhya-laad-74a169323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/ig_aaradhya05/profilecard/?igsh=bWE5anQwYjI3bnN2",
    "mail": "mailto:aashubhl2005@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Tanishka Meena.jpg",
    "personName": "Tanishka Meena",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/tanishka-meena-10aa72323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "tanishka_6091",
    "mail": "mailto:tanishkameena897@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Krish Jaiswal.jpg",
    "personName": "Krish Jaiswal ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/krish-jaiswal-b6770123b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "philosophical_krish ",
    "mail": "mailto:kjkrishh0982@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Yashika Agrawal.jpg",
    "personName": "Yashika Agrawal ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/yashika-agrawal-965bb6313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/_yashikaagrawal?igsh=MW04ZzZ3NmNhY3pnZw==",
    "mail": "mailto:27yashikaagrawal@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Yaksh raj Banote.jpg",
    "personName": "Yaksh Raj Banote",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/yaksh-banote-718b6a370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/yakshraj7?igsh=MTh6aXM1ZjE4d2s0NA==",
    "mail": "mailto:banoteyakshraj@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Gurpreet Singh.jpeg",
    "personName": "Gurpreet Singh",
    "personVertical": "Event Manager",
    "linkedin": "linkedin.com/in/gurpreet-singh-85898a264",
    "insta": "https://www.instagram.com/gurupreet__07/",
    "mail": "mailto:gurpreet3011987@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Yash A.png",
    "personName": "Yash Assudani",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/yash-assudani-685283234/",
    "insta": "https://www.instagram.com/yash__assudani/",
    "mail": "mailto:yashassudani007@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Talha H.jpg",
    "personName": "Md. Talha Hussain",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/talha-hussain-9aa84031a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/h_talha147?igsh=MWM3bzltMmd5M3liaA==",
    "mail": "mailto:talhahussain946@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Anushka Jain.jpeg",
    "personName": "Anushka Jain ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/anushka-jain-b47325350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "insta": "anushkajain7680",
    "mail": "mailto:2006anujain@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Aryan Mishra.JPG",
    "personName": "Aryan Mishra ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/aryan-mishra-369825326",
    "insta": "https://www.instagram.com/aryanmishra07d12",
    "mail": "mailto:pqrsmishra@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Mantsha Quraishi.jpg",
    "personName": "Mantsha Quraishi ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/mantsha-quraishi-692bb8288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/_mantashaa_02?igsh=MTFvNzQ4eHA0cnR4dQ==",
    "mail": "mailto:quraishimantsha4@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Naman Rao.png",
    "personName": "Naman Rao",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/naman-rao-325a3932a",
    "insta": "https://www.instagram.com/naman__rao7?igsh=ejVtMTNrYnR0bDVh",
    "mail": "mailto:namanrao2005@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Suhani Parikh.jpg",
    "personName": "Suhani Parikh ",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/suhani-parikh-27sp06",
    "insta": "parikh_suhani",
    "mail": "mailto:parikh27062005@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Nikunj Mandhanya.jpg",
    "personName": "Nikunj Mandhanya",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/nikunj-mandhanya-564666326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "nikunj_mandhanya_05",
    "mail": "mailto:nikunjmandhanya5@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Gyana Singh.jpg",
    "personName": "Gyana Singh",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/gyana-singh-aa9676325",
    "insta": "https://www.instagram.com/gyana0905?igsh=MWc2MGR4djJrcGVvMw==",
    "mail": "mailto:gyanasingh940@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Nancy Jain.jpg",
    "personName": "Nancy Jain",
    "personVertical": "Event Manager",
    "linkedin": "https://www.linkedin.com/in/nancy-jain-785247313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/nancyyyyy.25/",
    "mail": "mailto:Jainnancy2503@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Vidushi.png",
    "personName": "Vidushi Singh",
    "personVertical": "Event Manager",
    "linkedin": "https://in.linkedin.com/in/vidushi-singh-923a3721b",
    "insta": "https://www.instagram.com/vidushi_singh_20?igsh=eHV1Z2Z6YTQzbWo5",
    "mail": "mailto:vidushisinghsolanki@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Shivam.jpg",
    "personName": "Shivam Ahirwar",
    "personVertical": "Sponsorship Executive",
    "linkedin": "https://www.linkedin.com/in/shivam-ahirwar-b4b59b30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "Its_me_shiv.am",
    "mail": "mailto:shivam.shri.harivansh@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Sahil.png",
    "personName": "Sahil Chouhan",
    "personVertical": "Sponsorship Executive",
    "linkedin": "https://www.linkedin.com/in/sahil-chouhan-7a7011324",
    "insta": "sahil_chouhan_18",
    "mail": "mailto:sahilchouhan528@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Harman Singh Rekhi.jpg",
    "personName": "Harman Singh Rekhi ",
    "personVertical": "Sponsorship Executive",
    "linkedin": "http://linkedin.com/in/harman-singh-rekhi-833073326",
    "insta": "https://www.instagram.com/harman_rekhi_?igsh=MWx0azdmZmttejZlZA%3D%3D&utm_source=qr",
    "mail": "mailto:harmanrekhi006@gmail.com "
  },
  {
    "imgLink": "./team_images/team_28/Divyansh.png",
    "personName": "Divyansh Kale",
    "personVertical": "Sponsorship Executive",
    "linkedin": "https://www.linkedin.com/in/divyansh-kale-185725322",
    "insta": "https://www.instagram.com/divyansh.__45?igsh=MWZjOTJtbmhzc3RnNg%3D%3D&utm_source=qr",
    "mail": "mailto:divyanshkale26@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Suyash.png",
    "personName": "Suyash Gupta ",
    "personVertical": "Sponsorship Executive",
    "linkedin": "www.linkedin.com/in/suyash-gupta-475b65313",
    "insta": "Suyash.zz",
    "mail": "mailto:spgd090@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/manish maurya.jpg",
    "personName": "Manish Maurya ",
    "personVertical": "Video Editor",
    "linkedin": "https://www.linkedin.com/in/manish-maurya-b573a6323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "mani_maurya9670",
    "mail": "mailto:Manish.m100.manish@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Atul Tamrakar.jpeg",
    "personName": "Atul Tamrakar",
    "personVertical": "Video Editor",
    "linkedin": "http://linkedin.com/in/atul-tamrakar-81bb61282",
    "insta": "atul_tamrakar._",
    "mail": "mailto:tamrakaratul57@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Aditya Suhane.png",
    "personName": "Aditya Suhane ",
    "personVertical": "Video Editor",
    "linkedin": "https://www.linkedin.com/in/aditya-suhane-8b7688214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/aditya_suhane07?igsh=MXc2a2wyaWt0M3NjZQ==",
    "mail": "mailto:asuhane244@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Rahul Karn.png",
    "personName": "Rahul karn",
    "personVertical": "Designer",
    "linkedin": "https://www.linkedin.com/in/rahul-karn-4428b0295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/_.karnji?igsh=MXhvdmpvcHFnbWRscA==",
    "mail": "mailto:rahulkarna41@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Shashwat Pathak.png",
    "personName": "Shashwat Pathak ",
    "personVertical": "Designer",
    "linkedin": "https://www.linkedin.com/in/shashwatpathak7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/_shashwatpathak_?igsh=djAwcWlmN2UzM3Nz",
    "mail": "mailto:shashwatofficial0708@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Saksham Varma.jpg",
    "personName": "Saksham Varma",
    "personVertical": "Designer",
    "linkedin": "https://www.linkedin.com/in/saksham-varma-883a66325",
    "insta": "https://www.instagram.com/sakshamv_here?igsh=MTkwdGxyZ2FobjZtNA==",
    "mail": "mailto:sakshamv932@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Varun Sharma.png",
    "personName": "Varun Sharma",
    "personVertical": "Web Developer",
    "linkedin": "varun24-s",
    "insta": "vxrun._s",
    "mail": "mailto:varunsharma2990@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Harsh Salunkhe.jpg",
    "personName": "Harsh Salunkhe ",
    "personVertical": "Web Developer",
    "linkedin": "https://www.linkedin.com/in/harsh-salunkhe-136638337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/harsh_salunkhe05?igsh=a3JmNDNzY3FqcWNm",
    "mail": "mailto:harshsalunkhe120526@gmail.com"
  },
  {
    "imgLink": "./team_images/team_28/Naitik.png",
    "personName": "Naitik Raghuwanshi ",
    "personVertical": "Web Developer",
    "linkedin": "https://www.linkedin.com/in/naitikraghuwanshi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "insta": "https://www.instagram.com/raghuwanshi_naitik?igsh=NHRiZG52cjVudzFz",
    "mail": "mailto:raghuwanshinaitik04@gmail.com"
  }
  
];


/**
 * @param {HTMLElement} container - elemeent in which we have to append components
 */
const populateTeamContainer = (container, data) => {
  const columns = 4; // It is fixed that each row would have 4 columns (Cards)

  const rows = Math.ceil(data.length / columns); // Required number of rows

  container.innerHTML = "";
  
  for (let i = 0; i < rows; i++) {
    const rowElement = document.createElement("div");
    rowElement.className = i == rows - 1 ? "row last-row" : "row";

    container.appendChild(rowElement); // Add newly created div as a child to #more-team-cards element that is already present in DOM

    for (let j = 0; j < columns; j++) {
    
      // the algorithm still converts index upto next multiple of 4 as columns is constant : 4
      // hence, if we are having last row with less than 4 elements, it will still try to access entries in data[] that do not exist uptill 4th element of that row.
      if (columns * i + j > data.length - 1 ) break; // { Error solved } if converted index > last index of data[], then terminate the operation.

      const personData = data[columns * i + j]; // columns*i + j is conversion of index to linear form to access data list

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
      `;
    }
  }
};

const container1 = document.getElementById("core-team-cards") //element in which cards of core team are to be populated
const container2 = document.getElementById("more-team-cards"); //element in which cards of 2nd year team are to be made

populateTeamContainer(container1, data1); // populate core team cards container with cards of core-tea,
populateTeamContainer(container2, data2); // populate required container with cards of 2nd year team
