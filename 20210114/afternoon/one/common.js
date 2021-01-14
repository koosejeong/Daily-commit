
let menu = document.querySelector('.menu');
let menuBar = document.querySelector('.menu-bar');

menu.addEventListener('click', function(){
    this.classList.toggle('active');
    menuBar.classList.toggle('active');
});