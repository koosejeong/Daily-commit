
const menuToggle = document.querySelector('.toggle');
const navyToggle = document.querySelector('.navigation');

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate:0,
      stretch:0,
      depth:200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop:true,
  });

  function toggleMenu() {
      menuToggle.classList.toggle('active');
      navyToggle.classList.toggle('active')
  }

  menuToggle.addEventListener('click', () => {
    toggleMenu();
  });

