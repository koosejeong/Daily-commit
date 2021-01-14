
let layer1 = document.querySelector('.layer1');
let layer2 = document.querySelector('.layer2');
let txt = document.querySelector('.txt');

let scroll = window.pageYOffset;

document.addEventListener('scroll', function(e){
    let offset = window.pageYOffset;
    scroll = offset;
    console.log(scroll);
    layer1.style.width = (100 + scroll / 5) + '%';
    layer2.style.width = (100 + scroll / 5) + '%';
    layer2.style.left = scroll / 50 + '%';
    txt.style.top = -scroll / 20 + '%';

})