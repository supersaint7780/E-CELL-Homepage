// Script which populates the team page with cards of 2nd year team


// DATA of CORE team
const data1 = [
  {
    imgLink: 'Images-Team/Chaitanya Sharma.webp',
    personName: 'Chaitanya Sharma',
    personVertical: 'Coordinator (Admin)',
    linkedin: 'https://www.linkedin.com/in/chaitanya-sharma03',
    insta: 'https://www.instagram.com/chaiten.02/',
    mail: 'mailto:schaiten421@gmail.com'
  },
  {
    imgLink: 'Images-Team/Krishna Kumar Lalwani.webp',
    personName: 'Krishna Kumar Lalwani',
    personVertical: 'Coordinator (Finance)',
    linkedin: 'https://www.linkedin.com/in/krishna-kumar-lalwani-056843226',
    insta: 'about:blank#',
    mail: 'mailto:krishnakumar81038@gmail.com'
  },
  {
    imgLink: 'Images-Team/Aarushi Gulati.webp',
    personName: 'Aarushi Gulati',
    personVertical: 'Co-Coordinator (Admin)',
    linkedin: 'https://www.linkedin.com/in/aarushi-gulati',
    insta: 'https://instagram.com/areyoushe15?igshid=YmMyMTA2M2Y=',
    mail: 'mailto:aarushigulati07@gmail.com'
  },
  {
    imgLink: 'Images-Team/Vanshita Saavarna.webp',
    personName: 'Vanshita Saavarna',
    personVertical: 'Co-Coordinator (Finance)',
    linkedin: 'https://www.linkedin.com/in/vanshita-saavarna-4aa62623b',
    insta: 'https://instagram.com/vanshitasaavarna?igshid=YmMyMTA2M2Y=',
    mail: 'mailto:vanshitasaavarna@gmail.com'
  },
  {
    imgLink: 'Images-Team/Aakash Paliwal.webp',
    personName: 'Aakash Paliwal',
    personVertical: 'General Secretary',
    linkedin: 'https://www.linkedin.com/in/ap1008',
    insta: '#',
    mail: 'aakash.paliwal123@gmail.com'
  },
  {
    imgLink: 'Images-Team/GOPAL VASHISHTH.webp',
    personName: 'Gopal Vashishth',
    personVertical: 'General Secretary',
    linkedin: 'about:blank#',
    insta: 'https://www.instagram.com/gopalvashishth_/',
    mail: 'mailto:gopalvashisth2002@gmail.com'
  },
  {
    imgLink: 'Images-Team/Poonam bhargava.webp',
    personName: 'Poonam Bhargava',
    personVertical: 'Sponsorship Head',
    linkedin: 'https://www.linkedin.com/in/poonam-bhargava-407629231',
    insta: 'https://instagram.com/_poonam164?igshid=YmMyMTA2M2Y=',
    mail: 'mailto:poonambhargava1643@gmail.com'
  },
  {
    imgLink: 'Images-Team/Aaditya Vijayvargiya.webp',
    personName: 'Aaditya Vijayvargiya',
    personVertical: 'Events Head',
    linkedin: 'https://www.linkedin.com/in/aaditya-vijayvargiya-52b50822a/',
    insta: 'https://www.instagram.com/aaditya_vijayvargiya/',
    mail: 'mailto:aaditya.vijayvargiya18@gmail.com'
  },
  {
    imgLink: 'Images-Team/Vishnupriya Nair.webp',
    personName: 'Vishnupriya Nair',
    personVertical: 'Alumni Convener',
    linkedin: 'https://www.linkedin.com/mwlite/in/vishnupriya-nair-28331323b',
    insta: 'https://www.instagram.com/_vishnupriyanair/',
    mail: 'mailto:vpnbpl2003@gmail.com'
  },
  {
    imgLink: 'Images-Team/Sarthak Agar.webp',
    personName: 'Sarthak Agar',
    personVertical: 'Operations Head',
    linkedin: 'https://www.linkedin.com/in/sarthak-agar-b4041223b',
    insta: 'https://www.instagram.com/invites/contact/?i=1ed96y86xcive&utm_content=3crevhc',
    mail: 'mailto:agarsarthak.09@gmail.com'
  },
  {
    imgLink: 'Images-Team/A. Sri Shraddha.webp',
    personName: 'Adibhatla Sri Shraddha',
    personVertical: 'Public Relations Head',
    linkedin: 'https://www.linkedin.com/in/adibhatla-sri-shraddha-82247923b',
    insta: 'about:blank#',
    mail: 'mailto:asrishraddha@gmail.com'
  },
  {
    imgLink: 'Images-Team/Anant Shinde.webp',
    personName: 'Anant Shinde',
    personVertical: 'Creatives Head',
    linkedin: 'https://www.linkedin.com/in/anant-shinde-97462723b',
    insta: 'https://www.instagram.com/anant_shinde20/',
    mail: 'mailto:anantshinde2002@gmail.com'
  },
  {
    imgLink: 'Images-Team/Shrish Shrivastav.webp',
    personName: 'Shrish Shrivastav',
    personVertical: 'Technical Head',
    linkedin: 'https://www.linkedin.com/in/shrish-nitb/',
    insta: 'https://www.instagram.com/shrishnitb/',
    mail: 'mailto:shrish108@gmail.com'
  },
  {
    imgLink: 'Images-Team/Suhani Agarwal.webp',
    personName: 'Suhani Agarwal',
    personVertical: 'Design Head',
    linkedin: 'https://www.linkedin.com/in/suhani-agarwal-571474230',
    insta: 'https://instagram.com/suhaniiiiiagarwal?igshid=YmMyMTA2M2Y=',
    mail: 'mailto:suhaniagarwal4565@gmail.com'
  },
  {
    imgLink: 'Images-Team/Amrit Raj.webp',
    personName: 'Amrit Raj',
    personVertical: 'Startup and Corporate Head',
    linkedin: 'https://www.linkedin.com/in/amrit-raj-b71662230',
    insta: 'https://www.instagram.com/p/Cdqa-E-PERZ/?igshid=YmMyMTA2M2Y=',
    mail: 'mailto:amritraj5610@gmail.com'
  },
  {
    imgLink: 'Images-Team/Amritanshu Kumar.webp',
    personName: 'Amritanshu Kumar',
    personVertical: 'Executive',
    linkedin: 'https://www.linkedin.com/in/amritanshu-kumar-5a2719228/',
    insta: 'https://www.instagram.com/amritanshu002/',
    mail: 'mailto:amritanshu8271@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ashay Gwal.webp',
    personName: 'Ashay Gwal',
    personVertical: 'Executive',
    linkedin: 'https://www.linkedin.com/in/ashay-gwal-463ab323a',
    insta: 'https://instagram.com/ashay.95?igshid=YmMyMTA2M2Y=',
    mail: 'mailto:ashaygwal99@gmail.com'
  },
  {
    imgLink: 'Images-Team/AYUSHI MOHTA.webp',
    personName: 'Ayushi Mohta',
    personVertical: 'Executive',
    linkedin: 'https://www.linkedin.com/in/ayushi-mohta-604b12223',
    insta: 'https://www.instagram.com/mohtaayushi/',
    mail: 'mailto:ayushimohta1@gmail.com'
  },
  {
    imgLink: 'Images-Team/Mahak Khare.webp',
    personName: 'Mahak Khare',
    personVertical: 'Executive',
    linkedin: 'https://www.linkedin.com/in/mahak-khare-a3a04a227',
    insta: 'https://instagram.com/mahakk05?igshid=YmMyMTA2M2Y=',
    mail: 'mailto:mahak4khare001@gmail.com'
  },
  {
    imgLink: 'Images-Team/Pranay Tiwary.webp',
    personName: 'Pranay Tiwari',
    personVertical: 'Executive',
    linkedin: 'https://www.linkedin.com/in/pranay-tiwary-52362623b',
    insta: 'https://www.instagram.com/pranaypt7/',
    mail: 'mailto:pranayjota20@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ritul Kumari.webp',
    personName: 'Ritul Kumari',
    personVertical: 'Executive',
    linkedin: 'https://www.linkedin.com/in/ritul-kumari-2125aa224',
    insta: 'https://www.instagram.com/greentea_65/',
    mail: 'mailto:ritulshivpushp2.0@gmail.com'
  },
  {
    imgLink: 'Images-Team/siddharth nagaria.webp',
    personName: 'Siddharth Nagaria',
    personVertical: 'Executive',
    linkedin: 'https://www.linkedin.com/in/siddharth-nagaria-8685bb231',
    insta: 'https://instagram.com/si.ddharth_01?igshid=YmMyMTA2M2Y=',
    mail: 'mailto:siddharthn786@gmail.com'
  },
  {
    imgLink: 'Images-Team/Stuty Rahi.webp',
    personName: 'Stuty Rahi',
    personVertical: 'Executive',
    linkedin: 'http://linkedin.com/in/stuty-rahi-45877822b',
    insta: 'https://www.instagram.com/_stutyyy/',
    mail: 'mailto:rahistuty@gmail.com'
  },
  {
    imgLink: 'Images-Team/Taiba Zeya.webp',
    personName: 'Taiba Zeya',
    personVertical: 'Executive',
    linkedin: 'https://www.linkedin.com/in/taiba-zeya-32ba80231',
    insta: 'https://www.instagram.com/z_taiba_6z/',
    mail: 'mailto:zeyataiba@gmail.com'
  },
  {
    imgLink: 'Images-Team/Tanisha Bhati.webp',
    personName: 'Tanisha Bhati',
    personVertical: 'Executive',
    linkedin: 'https://www.linkedin.com/in/tanisha-bhati-a26a2b22b',
    insta: 'https://instagram.com/taniishabhatii?igshid=YmMyMTA2M2Y=',
    mail: 'mailto:taniishabhati@gmail.com'
  },
  {
    imgLink: 'Images-Team/man.webp',
    personName: 'Gautam Kumar',
    personVertical: 'Executive',
    linkedin: 'about:blank#',
    insta: 'about:blank#',
    mail: 'mailto:gautamssingh01@gmail.com'
  },
  {
    imgLink: 'Images-Team/Samarth Saxena.webp',
    personName: 'Samarth Saxena',
    personVertical: 'Joint Secretary',
    linkedin: 'https://www.linkedin.com/in/saxena2709',
    insta: 'https://instagram.com/samarth27.09?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:samarth27.09.03@gmail.com'
  },
  {
    imgLink: 'Images-Team/Aryan Samil.webp',
    personName: 'Aryan Samil',
    personVertical: 'Joint Secretary',
    linkedin: 'https://www.linkedin.com/in/aryan-samil-249414276',
    insta: 'https://instagram.com/aryann__09?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:aryan.samil.54@gmail.com'
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
    imgLink: 'Images-Team/Eashan Srivastava.webp',
    personName: 'Eashan Srivastava',
    personVertical: 'Sponsorship Lead',
    linkedin: 'https://www.linkedin.com/in/eashan-srivastava-191384255',
    insta: 'https://instagram.com/eashmo17?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:srivastavaeashan@gmail.com'
  },
  {
    imgLink: 'Images-Team/Abhinav Yadav.webp',
    personName: 'Abhinav Kumar Yadav',
    personVertical: 'Sponsorship Secretary',
    linkedin: 'https://www.linkedin.com/in/abhinav-kumar-yadav-418241254',
    insta: 'https://instagram.com/yadavabhinavk?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:abhinavkumaryadav266@gmail.com'
  },
  {
    imgLink: 'Images-Team/Sai Sathwik.webp',
    personName: 'Sai Sathwik',
    personVertical: 'Public Relations Head',
    linkedin: 'https://www.linkedin.com/in/sai-sathwik-pabba-56b117250',
    insta: 'https://instagram.com/sathwik_pabba?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:sathwikgupta04@gmail.com'
  },
  {
    imgLink: 'Images-Team/Kratika Jain.webp',
    personName: 'Kratika Jain',
    personVertical: 'Public Relations Secretary',
    linkedin: 'https://www.linkedin.com/in/kratika-jain-944814267',
    insta: 'https://instagram.com/cratzzikaa?igshid=MzMyNGUyNmU2YQ==',
    mail: 'mailto:0201it211045@gmail.com'
  },
  {
    imgLink: 'Images-Team/Manav Rao.webp',
    personName: 'Manav Rao',
    personVertical: 'Corporate Relations Lead',
    linkedin: 'https://www.linkedin.com/in/manav-rao-276311260',
    insta: 'https://www.instagram.com/invites/contact/?i=1ipazvv4coz00&utm_content=ph50k86',
    mail: 'mailto:manavrao063@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ayushi Rathore.webp',
    personName: 'Ayushi Rathore',
    personVertical: 'Startup and Investor Relations Lead',
    linkedin: 'https://www.linkedin.com/in/ayushi-rathore-786141253',
    insta: 'https://instagram.com/ayushi_rrrr?igshid=NGExMmI2YTkyZg==',
    mail: 'mailto:ayushir117@gmail.com'
  },
  {
    imgLink: 'Images-Team/Manas Bhutada.webp',
    personName: 'Manas Bhutada',
    personVertical: 'Media Lead',
    linkedin: 'https://www.linkedin.com/in/manas-bhutada-203162250',
    insta: 'https://instagram.com/manasbhutada?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:manasbhutada19@gmail.com'
  },
  {
    imgLink: 'Images-Team/Omkar Gochade.webp',
    personName: 'Omkar Gochade',
    personVertical: 'Media Secretary',
    linkedin: 'https://www.linkedin.com/in/omkar-gochade-9b7b9724a',
    insta: 'https://instagram.com/o.gochade?igshid=NGExMmI2YTkyZg==',
    mail: 'mailto:omkargochademanit@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ayushi Chouhan.webp',
    personName: 'Ayushi Chouhan',
    personVertical: 'Events Lead',
    linkedin: 'https://www.linkedin.com/in/ayushi-chouhan-3695b6277',
    insta: 'https://instagram.com/ayushii_chouhan76?igshid=MzRlODBiNWFlZA==',
    mail: 'mailto:ayushi.chouhan04@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ranojit Sikdar.webp',
    personName: 'Ranojit Sikdar',
    personVertical: 'Events Lead',
    linkedin: 'https://www.linkedin.com/in/ranojit-sikdar-040540277',
    insta: 'https://instagram.com/r_a_n_o_j_i_t?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:ranojitsikdar.19.1.03@gmail.com'
  },
  {
    imgLink: 'Images-Team/Anushmita Paul.webp',
    personName: 'Anushmita Paul',
    personVertical: 'Events Secretary',
    linkedin: 'https://www.linkedin.com/in/anushmita-paul-95970b259/',
    insta: 'about:blank#',
    mail: 'mailto:iam.anushmita@gmail.com'
  },
  {
    imgLink: 'Images-Team/Arushi Mishra.webp',
    personName: 'Arushi Mishra',
    personVertical: 'Events Secretary',
    linkedin: 'https://www.linkedin.com/in/arushi-mishra-469692251',
    insta: 'https://www.instagram.com/iamam250204/',
    mail: 'mailto:arushimishra2502@gmail.com'
  },
  {
    imgLink: 'Images-Team/Kunal Vishwakarma.webp',
    personName: 'Kunal Vishwakarma',
    personVertical: 'Social Media Lead',
    linkedin: 'https://www.linkedin.com/in/kunal-vishwakarma-2a1320261',
    insta: 'https://instagram.com/heyy_stewie?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:vkunaloff@gmail.com'
  },
  {
    imgLink: 'Images-Team/Mayank Suryavanshi.webp',
    personName: 'Mayank Suryavanshi',
    personVertical: 'Social Media Secretary',
    linkedin: 'https://www.linkedin.com/in/mayank-suryawanshi-136977277',
    insta: 'https://instagram.com/mayanksuryawansi?igshid=MzMyNGUyNmU2YQ==',
    mail: 'mailto:Mayanksuryawanshi98@gmail.com'
  },
  {
    imgLink: 'Images-Team/Laya Lodha.webp',
    personName: 'Laya Lodha',
    personVertical: 'Finance Lead',
    linkedin: 'https://www.linkedin.com/in/laya-lodha-082b31253/',
    insta: 'https://instagram.com/layalodha/',
    mail: 'about:blank#'
  },
  {
    imgLink: 'Images-Team/Mohit Gunani.webp',
    personName: 'Mohit Gunani',
    personVertical: 'Accounts Lead',
    linkedin: 'https://www.linkedin.com/in/mohit-gunani-20009124b',
    insta: 'https://instagram.com/gunanimohit?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:gunanimohit14@gmail.com'
  },
  {
    imgLink: 'Images-Team/RUDRAKSH RAJE Mishra.webp',
    personName: 'Rudraksh Raje Mishra',
    personVertical: 'Partnerships Lead',
    linkedin: 'https://www.linkedin.com/in/rudraksh-raje-mishra-42a596248',
    insta: 'https://instagram.com/rudraksh_raje_mishra?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:rajemishra1979@gmail.com'
  },
  {
    imgLink: 'Images-Team/Kavish Sarse.webp',
    personName: 'Kavish Sarse',
    personVertical: 'Operations Lead',
    linkedin: 'https://www.linkedin.com/in/kavish-sarse-0819b3254',
    insta: 'https://instagram.com/kavish_sarse?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:kavishsarse121@gmail.com'
  },
  {
    imgLink: 'Images-Team/siddak Rajpal.webp',
    personName: 'Siddak Rajpal',
    personVertical: 'Purchase and Logistics Lead',
    linkedin: 'https://www.linkedin.com/in/siddak-rajpal-21b32b233/',
    insta: 'https://www.instagram.com/siddakrajpal/',
    mail: 'mailto:siddakrajpal14@gmail.com'
  },
  {
    imgLink: 'Images-Team/Sanjana Kumari.webp',
    personName: 'Sanjana Kumari',
    personVertical: 'Promotions Lead',
    linkedin: 'https://www.linkedin.com/in/sanjana-kumari-3bab99258',
    insta: 'https://instagram.com/sanjanaaa._13_?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:sanjanaparul940@gmail.com'
  },
  {
    imgLink: 'Images-Team/Shreya Pandey.webp',
    personName: 'Shreya Pandey',
    personVertical: 'Promotions Secretary',
    linkedin: 'https://www.linkedin.com/in/shreya-pandey-09ba26250',
    insta: 'https://instagram.com/shreyya_9.0?igshid=NGExMmI2YTkyZg==',
    mail: 'mailto:pandeyshreya3851@gmail.com'
  },
  {
    imgLink: 'Images-Team/Sangam Tiwari.webp',
    personName: 'Sangam Tiwari',
    personVertical: 'Hospitality Lead',
    linkedin: 'https://www.linkedin.com/in/sangam-tiwari-a03473257/',
    insta: 'https://www.instagram.com/sangam.2510/',
    mail: 'mailto:tiwarisangam2510@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ashish Gupta.webp',
    personName: 'Ashish Gupta',
    personVertical: 'Marketing Lead',
    linkedin: 'https://www.linkedin.com/in/ashish-gupta-19a186256',
    insta: 'https://instagram.com/beingashish_gupta?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:ashishgupta0613@gmail.com'
  },
  {
    imgLink: 'Images-Team/Anika Yaduvanshi.webp',
    personName: 'Anika Singh Yaduvanshi',
    personVertical: 'Marketing Secretary',
    linkedin: 'http://linkedin.com/in/anika-yaduvanshi-980466277',
    insta: 'https://instagram.com/itsnikanika',
    mail: 'mailto:anika.singh.yaduvanshi@gmail.com'
  },
  {
    imgLink: 'Images-Team/Pavan Patidar.webp',
    personName: 'Pavan Patidar',
    personVertical: 'Creatives Lead',
    linkedin: 'https://www.linkedin.com/in/pavan-patidar-558199258',
    insta: 'https://instagram.com/_pavanpatidar_?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:patidarpavan136@gmail.com'
  },
  {
    imgLink: 'Images-Team/cherisha jajodia.webp',
    personName: 'Cherisha Jajodia',
    personVertical: 'Editorial and Research Lead',
    linkedin: 'https://www.linkedin.com/in/cherisha-jajodia-49529b18a',
    insta: 'https://instagram.com/cherishajajodiaa?igshid=NTc4MTIwNjQ2YQ==',
    mail: 'mailto:cherishajajodia@gmail.com'
  },
  {
    imgLink: 'Images-Team/Keerthi Bommareddy.webp',
    personName: 'Keerthi Bommareddy',
    personVertical: 'Content Creation Lead',
    linkedin: 'https://www.linkedin.com/in/keerthi-bommareddy-2b567b277',
    insta: 'https://instagram.com/keerthi_bommareddy?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:keerthi.mvm@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ananya Sharma.webp',
    personName: 'Ananya Sharma',
    personVertical: 'Content Creation Secretary',
    linkedin: 'https://www.linkedin.com/in/ananya-sharma-937177262',
    insta: 'https://www.instagram.com/ananyaaasm/',
    mail: 'mailto:ananya2k3sharma@gmail.com'
  },
  {
    imgLink: 'Images-Team/Avantika Singh.webp',
    personName: 'Avantika Singh',
    personVertical: 'Commerce and Planning Lead',
    linkedin: 'https://www.linkedin.com/in/avantika-singh-704a46257',
    insta: 'https://instagram.com/__.avantikaaa?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:avantikasingh03avi@gmail.com'
  },
  {
    imgLink: 'Images-Team/Manas Chaturvedi.webp',
    personName: 'Manas Chaturvedi',
    personVertical: 'Designing Lead',
    linkedin: 'https://www.linkedin.com/in/manas-chaturvedi-a38229190/',
    insta: 'https://instagram.com/maihoomanas',
    mail: 'mailto:manasc2009@gmail.com'
  },
  {
    imgLink: 'Images-Team/Yogesh Suryavanshi.webp',
    personName: 'Yogesh Ahirwar',
    personVertical: 'Designing Secretary',
    linkedin: 'https://www.linkedin.com/in/yogesh-suryavanshi-892895241',
    insta: 'https://instagram.com/yogeshsuryavanshi.in?igshid=ZDc4ODBmNjlmNQ==',
    mail: 'mailto:yogn7294@gmail.com'
  },
  {
    imgLink: 'Images-Team/Naman Santoshi.webp',
    personName: 'Naman Santoshi',
    personVertical: 'Video Editing Lead',
    linkedin: 'https://www.linkedin.com/in/naman-santoshi-1b6541277',
    insta: 'https://instagram.com/na._._.man?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:tasky1adi5195@gmail.com'
  },
  {
    imgLink: 'Images-Team/Priyansh Malviya.webp',
    personName: 'Priyansh Malviya',
    personVertical: 'Cinematograhy Lead',
    linkedin: 'https://www.linkedin.com/in/priyansh-malviya-1a9780258',
    insta: 'https://instagram.com/_the_priyansh_malviya_?igshid=MzNlNGNkZWQ4Mg==',
    mail: 'mailto:priyanshmalviya6268@gmail.com'
  },
  {
    imgLink: 'Images-Team/Ayush Maurya.webp',
    personName: 'Ayush Maurya',
    personVertical: 'Web Development Lead',
    linkedin: 'https://www.linkedin.com/in/ayush5556/',
    insta: 'https://www.instagram.com/amaurya7780/',
    mail: 'mailto:amaurya5556@gmail.com'
  },
  {
    imgLink: 'Images-Team/Archita Singh.webp',
    personName: 'Archita Singh',
    personVertical: 'Web Development Secretary',
    linkedin: 'https://www.linkedin.com/in/archita-singh-815915262',
    insta: 'https://instagram.com/arc_hita1324?igshid=NGExMmI2YTkyZg==',
    mail: 'mailto:archita13singh@gmail.com'
  }
];



// 2nd year team Members' data in JSON format(Scraped from previous version using scraper present in this repo):-
const data2 = [
  {
    imgLink: "./team_images/Abhinav Ashok.webp",
    personName: "Abhinav Ashok",
    personVertical: "Content Writer",
    linkedin: "https://www.linkedin.com/in/abhinav-ashok-2163b0290",
    insta: "https://www.instagram.com/abhi.nav_4?igsh=MXR1N25taDh3eWc4MA==",
    mail: "mailto:abhinav.ashok04@gmail.com",
  },
  {
    imgLink: "./team_images/Gauri.webp",
    personName: "Gauri Gupta",
    personVertical: "Content Writer",
    linkedin: "https://www.linkedin.com/in/gauri-gupta-238b1b290/",
    insta: "https://www.instagram.com/gauriii_17/",
    mail: "mailto:gaurii1703@gmail.com",
  },
  {
    imgLink: "./team_images/Rashika Agrawal.webp",
    personName: "Rashika Agrawal",
    personVertical: "Content Writer",
    linkedin:
      "https://www.linkedin.com/in/rashika-agrawal-709811290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "#",
    mail: "mailto:rashikaagrawal8428@gmail.com",
  },
  {
    imgLink: "./team_images/Arundhatii Saxena.webp",
    personName: "Arundhatii Saxena",
    personVertical: "Content Writer",
    linkedin:
      "https://www.linkedin.com/in/arundhatii-saxena-62ab3b282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/arundhatiisaxena?igsh=bndqanlrODRkN3dy",
    mail: "mailto:arundhatii.saxena@gmail.com",
  },
  {
    imgLink: "./team_images/Muskan Yadav.webp",
    personName: "Muskan Yadav",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/muskan-yadav-934798290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/_muskann_75?igsh=MTJ6emJ3MGtzMTZlNQ==",
    mail: "mailto:mymuskanyadav05@gmail.com",
  },
  {
    imgLink: "./team_images/Nikita Chakraborty.webp",
    personName: "Nikita Chakraborty",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/nikita-chakraborty-01057b290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/nikitachakraborty_/",
    mail: "mailto:niki.chakraborty2005@gmail.com",
  },
  {
    imgLink: "./team_images/Dev Bansal.webp",
    personName: "Dev Bansal",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/dev-bansal-22a54a282/",
    insta: "https://www.instagram.com/db_devbansal/",
    mail: "mailto:bansaldev894@gmail.com",
  },
  {
    imgLink: "./team_images/RUDRAKSHA POL.webp",
    personName: "Rudraksh Pol",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/rudraksha-pol-5b3680312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://instagram.com/rudraksha _2835/",
    mail: "mailto:rudrakshapol@gmail.com",
  },
  {
    imgLink: "./team_images/Animeshbohare.webp",
    personName: "Animesh Bohare",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/animesh-bohare-b97988301",
    insta: "#",
    mail: "mailto:rismeshbohare@gmail.com",
  },
  {
    imgLink: "./team_images/samridhi goyal.webp",
    personName: "Samridhi Goyal",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/samridhi-goyal-ab24a6290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/samridhi_018/",
    mail: "mailto:goyalsamridhi2005@gmail.com",
  },
  {
    imgLink: "./team_images/Vibha Lodhi.webp",
    personName: "Vibha Lodhi",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/vibha-lodhi",
    insta: "https://www.instagram.com/vibhalodhi765?igsh=MTFwZmN3MWFkemF2Nw==",
    mail: "mailto:lodhivibha765@gmail.com",
  },
  {
    imgLink: "./team_images/Kuhu Agrawal.webp",
    personName: "Kuhu Agarwal",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/kuhu-agrawal-2859a127b",
    insta: "https://www.instagram.com/kuhuagrawal51?igsh=N2N3YnY2dzN0bHl5",
    mail: "mailto:kuhupihu33@gmail.com",
  },
  {
    imgLink: "./team_images/akanksha jaiswal.webp",
    personName: "Akanksha Jaiswal",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/akanksha-jaiswal-3439a5282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta:
      "https://www.instagram.com/akanksha.jaiswal23?igsh=MXgydmNrcXJobnBjYw==",
    mail: "mailto:akanksha230412@gmail.com",
  },
  {
    imgLink: "./team_images/Gurleen Kaur Bhatia.webp",
    personName: "Gurleen Kaur Bhatia",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/gurleen-kaur-bhatia-8613a2290/",
    insta: "https://instagram.com/gurleenkaurbhatia_/",
    mail: "mailto:gurleenbhatia211359@gmail.com",
  },
  {
    imgLink: "./team_images/Hiya Sanghvi.webp",
    personName: "Hiya Sanghvi",
    personVertical: "Event Manager",
    linkedin: "http://www.linkedin.com/in/hiya-sanghvi10",
    insta: "https://instagram.com/_._hiyaaa_._/",
    mail: "mailto:hiyasanghvi037@gmail.com",
  },
  {
    imgLink: "./team_images/Chinmay Solanki.webp",
    personName: "Chinmay Solanki",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/chinmay-solanki-609454267",
    insta: "https://instagram.com/Chinmay_is/",
    mail: "mailto:solankichinmay8@gmail.com",
  },
  {
    imgLink: "./team_images/Ashwin.webp",
    personName: "Ashwin Gothwal",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/ashwin-gothwal-a5280a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/ashwin.6511?igsh=MWpveHBwMWxpZ3prNg==",
    mail: "mailto:ashwingothwal428@gmail.com",
  },
  {
    imgLink: "./team_images/Yatharth Daheriya.webp",
    personName: "Yatharth Daheriya",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/yatharth-daheriya-37358927b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/_yatharth_04?igsh=MXhydWtvbDJqbng5ZQ==",
    mail: "mailto:yashdeharia459@gmail.com",
  },
  {
    imgLink: "./team_images/Khushi Verma.webp",
    personName: "Khushi Verma",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/khushi-verma-966416290",
    insta: "https://www.instagram.com/_khushi_.verma?igsh=ZzJjY25uZ2JrdDI3",
    mail: "mailto:kv6265@gmail.com",
  },
  {
    imgLink: "./team_images/Meet Lad.webp",
    personName: "Meet Lad",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/meet-lad-7ab37728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/_.meeeet._?igsh=bTM1MmlhamI4ZnVw",
    mail: "mailto:m333t1075@gmail.com",
  },
  {
    imgLink: "./team_images/Harsh malik.webp",
    personName: "Harsh Malik",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/harsh13malik",
    insta: "https://www.instagram.com/harsh_._malik?igsh=MXI4NXhqdjcxYmlvaA==",
    mail: "mailto:harshmalik96433@gmail.com",
  },
  {
    imgLink: "./team_images/Kumar Anil.webp",
    personName: "Samar Singh",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/samar-singh-46750b237?trk=contact-info",
    insta: "https://instagram.com/_samar_singh020",
    mail: "mailto:anilkdee250@gmail.com",
  },
  {
    imgLink: "./team_images/Shubham Omray.webp",
    personName: "Shubham Omray",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/shubham-omray-199518268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/shubhamomray/",
    mail: "mailto:imshubhamomray@gmail.com",
  },
  {
    imgLink: "./team_images/Shantanu Chouksey.webp",
    personName: "Shantanu Chouksey",
    personVertical: "Event Manager",
    linkedin:
      "https://www.linkedin.com/in/shantanu-chouksey-30535a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/shantanuchouksey/",
    mail: "mailto:tanu050207@gmail.com",
  },
  {
    imgLink: "./team_images/Sanskar Sharma.webp",
    personName: "Sanskar Sharma",
    personVertical: "Event Manager",
    linkedin: "https://linkedin.com/in/sanskarnitb/",
    insta: "https://www.instagram.com/_sanskarsharma_?igsh=dGs0ZWc1M3RlcGIw",
    mail: "mailto:sanskar140404@gmail.com",
  },
  {
    imgLink: "./team_images/gaurvint.webp",
    personName: "Gaurvint Verma",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/gaurvint-verma-554329302/",
    insta: "http://instagram.com/gaurvint",
    mail: "mailto:gaurvint@gmail.com",
  },
  {
    imgLink: "./team_images/Tanisha Gangrade.webp",
    personName: "Tanisha Gangrade",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/tanisha-gangrade-ba496028b",
    insta: "https://instagram.com/tanisha_gangrade",
    mail: "mailto:tanishagangrade29@gmail.com",
  },
  {
    imgLink: "./team_images/Manu GS Parmar.webp",
    personName: "Manu GS Parmar",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/manugsparmar/",
    insta: "https://www.instagram.com/manuxparmar/",
    mail: "mailto:manugsparmar@gmail.com",
  },
  {
    imgLink: "./team_images/Snehal Terdalkar.webp",
    personName: "Snehal Terdalkar",
    personVertical: "Event Manager",
    linkedin: "https://www.linkedin.com/in/snehal-terdalkar-74466b290",
    insta: "https://instagram.com/_snehal _2610",
    mail: "mailto:snehalterdalkar@gmail.com",
  },
  {
    imgLink: "./team_images/Shreyansh Awasthi.webp",
    personName: "Shreyansh Awasthi",
    personVertical: "Event Manager",
    linkedin: "#https://www.linkedin.com/in/shreyansh-awasthi-1545792b2",
    insta:
      "https://www.instagram.com/shreyansh_awasthi007?igsh=cHozYmFzbWM4dng=",
    mail: "mailto:shreyanshawasthi66@gmail.com",
  },
  {
    imgLink: "./team_images/Harsh Prakash.webp",
    personName: "Harsh Prakash",
    personVertical: "Sponsorship Executive",
    linkedin: "https://www.linkedin.com/in/harsh-prakash-b83810290/",
    insta: "https://www.instagram.com/harsh.prakash49/",
    mail: "mailto:prakash.harsh49@gmail.com",
  },
  {
    imgLink: "./team_images/Nitesh Kumar.webp",
    personName: "Nitesh Kumar",
    personVertical: "Sponsorship Executive",
    linkedin: "https://www.linkedin.com/in/-nitesh-kumar",
    insta: "#",
    mail: "mailto:niteshkumar.ecell@gmail.com",
  },
  {
    imgLink: "./team_images/Shivam Pawar.webp",
    personName: "Shivam Anant Pawar",
    personVertical: "Sponsorship Executive",
    linkedin:
      "https://www.linkedin.com/in/shivam-pawar-868166280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://instagram.com/shivam_pawar05",
    mail: "mailto:shivamapawar05@gmail.com",
  },
  {
    imgLink: "./team_images/Pratham.webp",
    personName: "Pratham Chaturvedi",
    personVertical: "Sponsorship Executive",
    linkedin:
      "https://www.linkedin.com/in/pratham-chaturvedi-19486b2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/pratham_9772?igsh=MXFtbWNzY25xYXJ1Zg==",
    mail: "mailto:prathamchaturvedi3718@gmail.com",
  },
  {
    imgLink: "./team_images/Nachiket Bakshi.webp",
    personName: "Nachiket Bakshi",
    personVertical: "Sponsorship Executive",
    linkedin: "https://www.linkedin.com/in/BakshiNachiket",
    insta: "https://instagram.com/nachiketbakshi",
    mail: "mailto:nachiket11bakshi@gmail.com",
  },
  {
    imgLink: "./team_images/Ayush Verma.webp",
    personName: "Ayush Verma",
    personVertical: "Video Editor",
    linkedin: "https://www.linkedin.com/in/ayush-verma-53715b281",
    insta: "https://www.instagram.com/v_ayush07/?utm_source=ig_web_button_share_sheet",
    mail: "mailto:vayush0704@gmail.com",
  },
  {
    imgLink: "./team_images/Sanket Gawande.webp",
    personName: "Sanket Gawande",
    personVertical: "Video Editor",
    linkedin: "https://www.linkedin.com/in/sanket-gawande-a8629a281",
    insta: "https://www.instagram.com/321sanket?igsh=bWVibnU3MmluZmFi",
    mail: "mailto:sanketgawande989@gmail.com",
  },
  {
    imgLink: "./team_images/Sannidhya Srivastava.webp",
    personName: "Saanidhya Srivastava",
    personVertical: "Video Editor",
    linkedin: "https://www.linkedin.com/in/sannidhya-srivastava-4976a9277/",
    insta: "https://www.instagram.com/_sann1dh_/",
    mail: "mailto:sannidhya123567@gmail.com",
  },
  {
    imgLink: "./team_images/Tarun Jaiswal.webp",
    personName: "Tarun Jaiswal",
    personVertical: "Video Editor",
    linkedin: "https://in.linkedin.com/in/tarun-jaiswal-1602822b1",
    insta: "https://instagram.com/tarunjaiswal621",
    mail: "mailto:jaiswalt54@gmail.com",
  },
   {
    imgLink: "./Images-Team/man.webp",
    personName: "Sachin Singh",
    personVertical: "Video Editor",
    linkedin: "#",
    insta: "#",
    mail: "#",
  },
  {
    imgLink: "./team_images/Tuba Rehman.webp",
    personName: "Tuba Rehman",
    personVertical: "Graphic Designer",
    linkedin: "https://www.linkedin.com/in/tuba-rehman-586103203",
    insta: "https://instagram.com/tun4.aaa",
    mail: "mailto:tubarehman545@gmail.com",
  },
  {
    imgLink: "./team_images/sravan.webp",
    personName: "Sravandev I K",
    personVertical: "Graphic Designer",
    linkedin: "http://www.linkedin.com/in/sravandev-i-k",
    insta: "https://www.instagram.com/i.k.______?igsh=MXY3ZWh6OXl5ZmU2aQ==",
    mail: "mailto:iksravandev02@gmail.com",
  },
  {
    imgLink: "./team_images/Geet Talati.webp",
    personName: "Geet Talati",
    personVertical: "Graphic Designer",
    linkedin: "https://www.linkedin.com/in/geet-talati-868851285",
    insta: "https://instagram.com/_geet14/",
    mail: "mailto:geett590@gmail.com",
  },
  {
    imgLink: "./team_images/Krish Shukla.webp",
    personName: "Krish Shukla",
    personVertical: "Graphic Designer",
    linkedin: "https://www.linkedin.com/in/krish-shukla-037a9b307/",
    insta: "https://www.instagram.com/shukrishh/",
    mail: "mailto:shuklakrish215@gmail.com",
  },
  {
    imgLink: "./team_images/Nihira Agrawal.webp",
    personName: "Nihira Agarwal",
    personVertical: "Graphic Designer",
    linkedin:
      "https://www.linkedin.com/in/nihira-agrawal-587810290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/nihira_1006?igsh=eW9lZ3ZjdXM2eW0x",
    mail: "mailto:kian071005@gmail.com",
  },
 
  {
    imgLink: "./team_images/Nidhi Singh Thakur.webp",
    personName: "Nidhi Singh Thakur",
    personVertical: "Web Developer",
    linkedin:
      "https://www.linkedin.com/in/nidhi-singh-thakur-17a69a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/_nidhiix_?igsh=MWgzc3BpYm9tYndndQ==",
    mail: "mailto:pvt.nidhisingh07@gmail.com",
  },
  {
    imgLink: "./team_images/Mohammad Maasir.webp",
    personName: "Mohammad Maasir",
    personVertical: "Web Developer",
    linkedin: "https://www.linkedin.com/in/maasir554",
    insta: "https://instagram.com/maasir554",
    mail: "mailto:maasir554@gmail.com",
  },
  {
    imgLink: "./team_images/Sanskar Shrivastava.webp",
    personName: "Sanskar Shrivastava",
    personVertical: "Web Developer",
    linkedin:
      "https://www.linkedin.com/in/sanskar-shrivastava-813322206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta:
      "https://www.instagram.com/sanskar.shrivastava_95?igsh=a2VpbWEyemwweXRv",
    mail: "mailto:snskrshrvstv@gmail.com",
  },
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

    container.appendChild(rowElement); // Add newly created div as a child to #modre-team-cards element that is already present in DOM

    for (let j = 0; j < columns; j++) {
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
