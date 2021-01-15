
const nav = document.querySelector('nav');
const tog = document.querySelector('.menu-toggle');
const subLi = document.querySelectorAll('.sub-menu');

tog.addEventListener('click', function(){
    nav.classList.toggle('act');
});

subLi.forEach(list => list.addEventListener('click', () => {
    list.classList.toggle('act');
}));