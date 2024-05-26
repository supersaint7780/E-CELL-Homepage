
window.onscroll = function () { scrollFunction() };

  function scrollFunction() {

    if(window.innerWidth>1110){
      let nav = document.getElementsByTagName("nav")[0].style;
      let logo = document.getElementById("logo").style;
      let navItem = document.getElementsByClassName("nav-items")[0].style;
      let hrSlide = document.getElementById("hrSlide").style;
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.height = "94px";
        logo.height = "60px";
        logo.width = "60px";
        navItem.marginTop = "22px";
        // navItem.transform = "scale(0.97)";
        hrSlide.opacity = 1;
      } else {
        nav.height = "132px";
        logo.height = "94px";
        logo.width = "94px";
        navItem.marginTop = "45px";
        // navItem.transform = "scale(1)";
        hrSlide.opacity = 0;
      }
    }
    
    
  }



const navSlide = () => {
 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.nav-items');
 const navLinks = document.querySelectorAll('.nav-link');
// Toggle Nav
 burger.addEventListener('click',()=>{
  nav.classList.toggle('nav-active');
   // Animate links
  navLinks.forEach((link,index) => {
   if(link.style.animation){
    link.style.animation = '';
   }
   else{
    
    link.style.animation = 'navLinkFade 0.5s ease forwards 0.5s 1';
    
   }   
});
// Burger Animation
 burger.classList.toggle('toggle');
 });

 
}
navSlide();
