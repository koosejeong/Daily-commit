const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close');

function popupToggle() {
  popup.classList.toggle('act');
}

popupBtn.addEventListener('click', () => {
  popupToggle();
});

closeBtn.addEventListener('click', () => {
  popupToggle();
});