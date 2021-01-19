
const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoe-background');

let prevColor = "blue";
let animationEnd = true;

function cahngeSize(){
    sizes.forEach(size => size.classList.remove('act'));
    this.classList.add('act');
}

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);
    // console.log(color);

    colors.forEach(c => c.classList.remove('act'));
    this.classList.add('act');

    document.documentElement.style.setProperty('--primary', primary);
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', cahngeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width:768px)");
function changeHeight() {
    if(x.matches) {
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    } else {
        shoeBg.style.height = '475px';
    }
}
changeHeight();

window.addEventListener('resize', changeHeight);

// sizes.forEach(function(size){
//     size.addEventListener('click', function(){
//         cahngeSize();
//     })
// })