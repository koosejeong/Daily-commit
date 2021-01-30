
const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  // console.log('offset :' + offset);
  parallax.style.backgroundPositionY = offset * 0.7 + 'px';

})