
const imgBox = document.querySelector('.imgBox');
const txtBox = document.querySelector('.txtBox');
const slides = imgBox.getElementsByTagName('img');
const slidesTxt = txtBox.getElementsByTagName('div'); 
const btnLi = document.querySelectorAll('li.btn');
let i = 0;
let j = 0;

console.log(btnLi);

function nextSlide() {
    slides[i].classList.remove('act'); //0, 1, 2, 3
    i = (i + 1) % slides.length; //1, 2, 3 ...1(true), 4
    console.log(i);
    console.log(slides.length);
    slides[i].classList.add('act');
}
function prevSlide() {
    slides[i].classList.remove('act');
    i = (i - 1 + slides.length) % slides.length;
    console.log(i);
    slides[i].classList.add('act');
}

function nextTxtSlide() {
    slidesTxt[j].classList.remove('act');
    j = (j + 1) % slidesTxt.length;
    console.log(j);
    slidesTxt[j].classList.add('act');
}
function prevTxtSlide() {
    slidesTxt[j].classList.remove('act');
    j = (j - 1 + slidesTxt.length) % slidesTxt.length;
    console.log(j);
    slidesTxt[j].classList.add('act');
}

btnLi.forEach(function (list) {
    list.addEventListener('click', () => {
        if(list.classList.contains('next')){
            nextSlide();
            nextTxtSlide();
        } else {
            prevSlide();
            prevTxtSlide();
        }
    });
});