let slideShow = document.getElementById('slideshow');
let slides = slideShow.getElementsByTagName('img');
let index = 0;
// =======================================================
let slideShowTxt = document.getElementById('slideShowText');
let slidesTxt = slideShowTxt.getElementsByTagName('div');
let idx = 0;
// =======================================================
let btn = document.querySelectorAll('a.btn');
// console.log(btn);
// =======================================================
let menuToggle = document.querySelector('.menuIcon');
let mobMenu = document.querySelector('.mobMenu');

function Toggle(){
    menuToggle.classList.toggle('active');
    mobMenu.classList.toggle('active');
}

menuToggle.addEventListener('click', function(){
    Toggle();
})

function nextSlide(){
    slides[index].classList.remove('active');
    // index = (index + 1) % slides.length;
    index++;
    slides[index].classList.add('active');
}
function prevSlide(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// =======================================================
function nextSlideTxt(){
    slidesTxt[idx].classList.remove('active');
    // idx = (idx + 1) % slides.length;
    idx++;
    slidesTxt[idx].classList.add('active');
}
function prevSlideTxt(){
    slidesTxt[idx].classList.remove('active');
    idx = (idx - 1 + slides.length) % slidesTxt.length;
    slidesTxt[idx].classList.add('active');
}

// =======================================================
btn.forEach(function(anc){
    anc.addEventListener('click', function(){
       if(this === 0) {
            nextSlide();
            nextSlideTxt();
       } else {
            prevSlide();
            prevSlideTxt();
       }
    })
})