
const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.btn');
const options = document.querySelectorAll('.option');
const slides = document.querySelectorAll('.img');
const backgrounds = document.querySelectorAll('.bg');

let idx = 1;
let opIdx = 0;
let size = slides[idx].clientWidth;
// console.log(size);

update();

function update() {
    slider.style.transform = "translateX("+ (-size * idx) +"px)";
    // index page nation option update
    options.forEach(op => op.classList.remove('color-red'));
    options[opIdx].classList.add('color-red');
    // slide image matchimg background image change
    backgrounds.forEach(bg => bg.classList.remove('show'));
    backgrounds[opIdx].classList.add('show');
}

function slide() {
    slider.style.transition = "transform .5s ease-in-out";
    update();
}

function btnCheck() {
    if(this.id == "prev") {
        idx--;
        if(opIdx == 0) {
            opIdx = 4;
        } else {
            opIdx--;
        }
    } else {
        idx++;
        if(opIdx == 4) {
            opIdx = 0;
        } else {
            opIdx++;
        }
    }
    slide();
}

function optionFucn() {
    let i = Number(this.getAttribute('option-index'));
    idx = i + 1;
    opIdx = i;
    slide();
}

slider.addEventListener('transitionend', () => {
    if(slides[idx].id === "first") {
        slider.style.transition = "none";
        idx = slides.length - 2; //5
        slider.style.transform = "translateX("+ (-size * idx) +"px)";
    } else if(slides[idx].id === "last") {
        slider.style.transition = "none";
        idx = 1;
        slider.style.transform = "translateX("+ (-size * idx) +"px)";
    }
})

buttons.forEach(bnt => bnt.addEventListener('click', btnCheck));
options.forEach(opt => opt.addEventListener('click', optionFucn));