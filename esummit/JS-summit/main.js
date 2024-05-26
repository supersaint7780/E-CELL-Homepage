const parallax = document.getElementById("parallax");
window.addEventListener("scroll",function(){
let offset = window.pageYOffset;
parallax.style.backgroundPositionY = offset*0.5+"px";
});


const cardFirst = document.getElementById('1st-card');
const eventImg1 = document.getElementById('1st-card-img');
const eventText1 = document.getElementById('1st-event-text');

const cardSecond = document.getElementById('2nd-card');
const eventImg2 = document.getElementById('2nd-card-img');
const eventText2 = document.getElementById('2nd-event-text');

const cardThird = document.getElementById('3rd-card');
const eventImg3 = document.getElementById('3rd-card-img');
const eventText3 = document.getElementById('3rd-event-text');

const cardFourth = document.getElementById('4th-card');
const eventImg4 = document.getElementById('4th-card-img');
const eventText4 = document.getElementById('4th-event-text');

const cardFifth = document.getElementById('5th-card');
const eventImg5 = document.getElementById('5th-card-img');
const eventText5 = document.getElementById('5th-event-text');

const cardSixth = document.getElementById('6th-card');
const eventImg6 = document.getElementById('6th-card-img');
const eventText6 = document.getElementById('6th-event-text');

const card7 = document.getElementById('7th-card');
const eventTitle1 = document.getElementById('1st-event-title')
const eventText7 = document.getElementById('1st-event-text-2');

const card8 = document.getElementById('8th-card');
const eventTitle2 = document.getElementById('2nd-event-title')
const eventText8 = document.getElementById('2nd-event-text-2');

const card9 = document.getElementById('9th-card');
const eventTitle3 = document.getElementById('3rd-event-title')
const eventText9 = document.getElementById('3rd-event-text-2');

const card10 = document.getElementById('10th-card');
const eventTitle4 = document.getElementById('4th-event-title')
const eventText10 = document.getElementById('4th-event-text-2');


cardFirst.addEventListener("mouseenter", function(){
    eventImg1.classList.add('sml-img');
    eventText1.classList.add('add-text');
    cardFirst.classList.add('event-card-add');
    eventImg1.style.animation='mymove 1s ease forwards';
    eventText1.style.animation='addtext 1s ease forwards 0.3s';
});
cardFirst.addEventListener("mouseleave", function(){
    eventImg1.classList.remove('sml-img');
    eventText1.classList.remove('add-text');
    cardFirst.classList.remove('event-card-add');
    eventImg1.style.animation='mymove2 1s ease';
    eventText1.style.animation='addtext2 1s ease';
});

cardSecond.addEventListener("mouseenter", function(){
    eventImg2.classList.add('sml-img');
    eventText2.classList.add('add-text');
    cardSecond.classList.add('event-card-add');
    eventImg2.style.animation='mymove 1s ease forwards';
    eventText2.style.animation='addtext 1s ease forwards 0.3s';
});
cardSecond.addEventListener("mouseleave", function(){
    eventImg2.classList.remove('sml-img');
    eventText2.classList.remove('add-text');
    cardSecond.classList.remove('event-card-add');
    eventImg2.style.animation='mymove2 1s ease';
    eventText2.style.animation='addtext2 1s ease';
});

cardThird.addEventListener("mouseenter", function(){
    eventImg3.classList.add('sml-img');
    eventText3.classList.add('add-text');
    cardThird.classList.add('event-card-add');
    eventImg3.style.animation='mymove 1s ease forwards';
    eventText3.style.animation='addtext 1s ease forwards 0.3s';
});
cardThird.addEventListener("mouseleave", function(){
    eventImg3.classList.remove('sml-img');
    eventText3.classList.remove('add-text');
    cardThird.classList.remove('event-card-add');
    eventImg3.style.animation='mymove2 1s ease';
    eventText3.style.animation='addtext2 1s ease';
});

cardFourth.addEventListener("mouseenter", function(){
    eventImg4.classList.add('sml-img');
    eventText4.classList.add('add-text');
    cardFourth.classList.add('event-card-add');
    eventImg4.style.animation='mymove 1s ease forwards';
    eventText4.style.animation='addtext 1s ease forwards 0.3s';
});
cardFourth.addEventListener("mouseleave", function(){
    eventImg4.classList.remove('sml-img');
    eventText4.classList.remove('add-text');
    cardFourth.classList.remove('event-card-add');
    eventImg4.style.animation='mymove2 1s ease';
    eventText4.style.animation='addtext2 1s ease';
});

cardFifth.addEventListener("mouseenter", function(){
    eventImg5.classList.add('sml-img');
    eventText5.classList.add('add-text');
    cardFifth.classList.add('event-card-add');
    eventImg5.style.animation='mymove 1s ease forwards';
    eventText5.style.animation='addtext 1s ease forwards 0.3s';
});
cardFifth.addEventListener("mouseleave", function(){
    eventImg5.classList.remove('sml-img');
    eventText5.classList.remove('add-text');
    cardFifth.classList.remove('event-card-add');
    eventImg5.style.animation='mymove2 1s ease';
    eventText5.style.animation='addtext2 1s ease';
});

cardSixth.addEventListener("mouseenter", function(){
    eventImg6.classList.add('sml-img');
    eventText6.classList.add('add-text');
    cardSixth.classList.add('event-card-add');
    eventImg6.style.animation='mymove 1s ease forwards';
    eventText6.style.animation='addtext 1s ease forwards 0.3s';
});
cardSixth.addEventListener("mouseleave", function(){
    eventImg6.classList.remove('sml-img');
    eventText6.classList.remove('add-text');
    cardSixth.classList.remove('event-card-add');
    eventImg6.style.animation='mymove2 1s ease';
    eventText6.style.animation='addtext2 1s ease';
});

card7.addEventListener("mouseenter", function(){
    eventTitle1.classList.add('sml-img');
    eventText7.classList.add('add-text');
    card7.classList.add('event-card-add');
    eventTitle1.style.animation = 'mymove 1s ease forwards';
    eventText7.style.animation = 'addtext 1s ease forwards 0.3s ';
});
card7.addEventListener("mouseleave", function(){
    eventTitle1.classList.remove('sml-img');
    eventText7.classList.remove('add-text');
    card7.classList.remove('event-card-add');
    eventTitle1.style.animation = 'mymove2 1s ease ';
    eventText7.style.animation = 'addtext2 1s ease ';
});

card8.addEventListener("mouseenter", function(){
    eventTitle2.classList.add('sml-img');
    eventText8.classList.add('add-text');
    card8.classList.add('event-card-add');
    eventTitle2.style.animation = 'mymove 1s ease forwards';
    eventText8.style.animation = 'addtext 1s ease forwards 0.3s ';
});
card8.addEventListener("mouseleave", function(){
    eventTitle2.classList.remove('sml-img');
    eventText8.classList.remove('add-text');
    card8.classList.remove('event-card-add');
    eventTitle2.style.animation = 'mymove2 1s ease ';
    eventText8.style.animation = 'addtext2 1s ease ';
});

card9.addEventListener("mouseenter", function(){
    eventTitle3.classList.add('sml-title');
    eventText9.classList.add('add-text-2');
    card9.classList.add('event-card-add');
    eventTitle3.style.animation = 'addtitle1 1s ease forwards';
    eventText9.style.animation = 'addtext3 1s ease forwards 0.3s ';
});
card9.addEventListener("mouseleave", function(){
    eventTitle3.classList.remove('sml-title');
    eventText9.classList.remove('add-text-2');
    card9.classList.remove('event-card-add');
    eventTitle3.style.animation = 'addtitle2 1s ease ';
    eventText9.style.animation = 'addtext4 1s ease ';
});

card10.addEventListener("mouseenter", function(){
    eventTitle4.classList.add('sml-title');
    eventText10.classList.add('add-text-2');
    card10.classList.add('event-card-add');
    eventTitle4.style.animation = 'addtitle1 1s ease forwards';
    eventText10.style.animation = 'addtext3 1s ease forwards 0.3s ';
});
card10.addEventListener("mouseleave", function(){
    eventTitle4.classList.remove('sml-title');
    eventText10.classList.remove('add-text-2');
    card10.classList.remove('event-card-add');
    eventTitle4.style.animation = 'addtitle2 1s ease ';
    eventText10.style.animation = 'addtext4 1s ease ';
});
