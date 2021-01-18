
let togIcon = document.querySelector('.toggle');

function toggleMenu() {
    let nav = document.querySelector('.nav');
    nav.classList.toggle('act');
    togIcon.classList.toggle('act');
}

togIcon.addEventListener('click', function(){
    toggleMenu();
});