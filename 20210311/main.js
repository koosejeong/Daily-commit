const nav = document.querySelector('.navigation');

document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('act');
    nav.classList.toggle('act');
}