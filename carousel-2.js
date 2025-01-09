const swiper = new Swiper('#carousel-display', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 2500, // ms delay between transitions
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
  
    // If we need pagination
    pagination: {
      el: '#carousel-bullets',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#carousel-right',
      prevEl: '#carousel-left',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


const swiper2 = new Swiper('#testis-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
      delay: 4000, // ms delay between transitions
      disableOnInteraction: false, // Continue autoplay after user interaction
    },

  // If we need pagination
  pagination: {
    el: '#testis-bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '#testis-right',
    prevEl: '#testis-left',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
