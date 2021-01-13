let bg = document.querySelector('.bg');
let fullMoon = document.querySelector('.moon');
let mouatain = document.querySelector('.mountain');
let road = document.querySelector('.road');
let hTxt = document.querySelector('.txt');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    bg.style.top = value + 0.5 + 'px';
    fullMoon.style.left = -value + 0.5 + 'px';
    mouatain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    hTxt.style.top = value * 1 + 'px';

});