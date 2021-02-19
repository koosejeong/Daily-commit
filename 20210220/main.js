const banner = document.querySelector('.banner');

window.addEventListener('scroll', () => {
    const value = 700 - window.scrollY;
    console.log(value);
    banner.style.clipPath = "circle("+ value +"px at center center)";
})