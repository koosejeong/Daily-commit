const sec = document.getElementById('sec');
const nav = document.querySelector('.navigation');

function toggle() {
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}

sec.addEventListener('click', function(){
    toggle();
});