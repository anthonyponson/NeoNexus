
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay'); 
const fadeElems = document.querySelectorAll('.has-fade');

 btnHamburger.addEventListener('click', function(){
 console.log('click hamburger');

 if(header.classList.contains('open')){ // close hamburger menu
   body.classList.remove('noscroll');
   header.classList.remove('open');
   fadeElems.forEach(function(element){
   element.classList.remove('fade-in');
   element.classList.add('fade-out');
   });
   
 }
 else{

      body.classList.add('noscroll');
      header.classList.add('open'); // open hamburger menu
      fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
    
 }
 
}); 


// mansory grid layout


// swipper js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Scroll Reveal Animation

const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration: '1000',
  reset: 'true'

})

//home

ScrollReveal().reveal('.hero__content',{});
ScrollReveal().reveal('.hero-image',{});

ScrollReveal().reveal('.about-image',{});
ScrollReveal().reveal('.about__content',{});


ScrollReveal().reveal('.service__item',{ delay : 600});
ScrollReveal().reveal('.service__intro',{});


ScrollReveal().reveal('.work__heading',{});

ScrollReveal().reveal('.work__bg1',{ delay: 200});
ScrollReveal().reveal('.work__bg2',{ delay: 200});
ScrollReveal().reveal('.work__bg3',{ delay: 200});

ScrollReveal().reveal('.work__bg4',{ delay: 400});
ScrollReveal().reveal('.work__bg5',{ delay: 400});
ScrollReveal().reveal('.work__bg6',{ delay: 400});

ScrollReveal().reveal('.work__bg7',{ delay: 600});
ScrollReveal().reveal('.work__bg8',{ delay: 600});


ScrollReveal().reveal('.testmonials__heading',{});
ScrollReveal().reveal('.swiper-slide',{delay:300});

ScrollReveal().reveal('.contact__heading',{});
ScrollReveal().reveal('.contact__form',{delay:400});
ScrollReveal().reveal('.contact__button',{delay:600});


