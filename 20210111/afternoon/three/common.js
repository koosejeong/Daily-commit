let nav = document.querySelector('.nav');
let togMenu = document.querySelector('.toggle');

function menuToggle() {
    nav.classList.toggle('active');
    togMenu.classList.toggle('active');
}

togMenu.addEventListener('click', function(){
    menuToggle();
})