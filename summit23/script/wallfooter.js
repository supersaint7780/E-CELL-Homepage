// navbar shrink script starts here
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (window.innerWidth > 1110) {
    let nav = document.getElementsByTagName("nav")[0].style;
    let logo = document.getElementById("logo").style;
    let navItem = document.getElementsByClassName("nav")[0].style;
    let hrSlide = document.getElementById("hrSlide").style;
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      nav.height = "94px";
      logo.height = "60px";
      logo.width = "60px";
      navItem.marginTop = "22px";
      hrSlide.opacity = 0;
    } else {
      nav.height = "132px";
      logo.height = "94px";
      logo.width = "94px";
      navItem.marginTop = "45px";
      hrSlide.opacity = 0;
    }
  }
  if (document.documentElement.scrollTop < 220) {
    let progress = Math.trunc(document.documentElement.scrollTop) / 220;
    document.getElementsByClassName("wall-heading")[0].style.opacity = (1 - (0.9 * progress));
    document.getElementsByClassName("sub-heading")[0].style.opacity = (1 - (0.9 * (progress)));
    document.getElementsByClassName("tagline")[0].style.opacity = (1 - (0.9 * (progress)));
    document.getElementsByClassName("social")[0].style.opacity = (1 - (0.9 * (progress)));
  }
}
// navbar shrink script ends here

// nav script starts here
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-items');
  const navLinks = document.querySelectorAll('.nav-link');
  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = 'navLinkFade 0.5s ease forwards 0.5s 1';
      }
    });
    // Burger Animation
    burger.classList.toggle('toggle');
  });
}
navSlide();
// nav script ends here

// to change the color of navbar from black to transparent on esummit website
// after scrolling certain amount
document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Adjust the scroll height as needed (100vh in this case)
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});