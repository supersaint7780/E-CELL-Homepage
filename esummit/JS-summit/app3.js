const tl = gsap.timeline({default:{ease:"power1.out"}});

tl.to('.text',{y:'0%',duration: 1, stagger: 0.25});
tl.to('.slider',{y:"-100%", duration:1.5,delay:0.2});
tl.to('.intro',{y:"-100%",duration:1},"-=1");
tl.fromTo('nav',{opacity:0},{opacity:1,duration:1});
tl.fromTo('.big-text',{opacity:0},{opacity:1,duration:1},"-=1");
tl.fromTo('.about-text',{opacity:0},{opacity:1,duration:1},"-=1");
tl.fromTo('.heading',{opacity:0},{opacity:1,duration:1},"-=1");
tl.fromTo('.esummit-img',{opacity:0},{opacity:1,duration:1},"-=1");