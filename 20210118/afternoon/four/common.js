
var  fixedArea = document.querySelector('.fixed-area');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    fixedArea.style.clipPath = "circle("+ value +"px at center)";
});