
const bg = document.getElementById('header');
console.log(bg);
window.addEventListener('scroll', function() {
    bg.style.backgroundSize = 160 - +window.pageYOffset/12 +'%';
    bg.style.opacity = 1 - +window.pageYOffset/700 +'';
})