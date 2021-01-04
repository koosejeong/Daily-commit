const toggleMenu = document.querySelector('.menu');
const actionProfile = document.querySelector('.action');

function menuToggle() {
    toggleMenu.classList.toggle('active');
}

actionProfile.addEventListener('click', function(){
    menuToggle();
});