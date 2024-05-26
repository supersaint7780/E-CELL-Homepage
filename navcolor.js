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