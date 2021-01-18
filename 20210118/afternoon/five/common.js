
let txt = document.querySelector('.txt');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value);
    txt.style.marginBottom = value * 2 + 'px';
});