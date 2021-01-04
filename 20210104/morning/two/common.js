const toggle = document.querySelector('.toggle');
const section = document.querySelector('section');
function menuToggle() {
    toggle.classList.toggle('active');
    section.classList.toggle('active');
};

toggle.addEventListener('click', function(){
    menuToggle();
});