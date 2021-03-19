
const header = document.querySelector('header');
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 0);
})

toggle.onclick = function(){
    this.classList.toggle('act');
    nav.classList.toggle('act');
}
