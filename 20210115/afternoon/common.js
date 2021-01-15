
let temp = document.querySelector('.temp');
let btn = document.querySelectorAll('.btn');
let list = document.querySelector('ul');
let len = document.querySelectorAll('li').length;
let first = document.querySelector('.first');
let lastLi = document.querySelector('li:last-child');
let idx = 0;
let go;

let cloneLi = lastLi.cloneNode(true);
first.before(cloneLi);
len++;
console.log(len);

btn.forEach(slide => slide.addEventListener('click', (clk) => {
    const clkAnc = clk.target.parentNode;
    if(clkAnc.classList.contains('next')) {
        idx++;
        console.log(idx);
        if(idx >= len -1) {
            idx = 0;
        }
    } else {
        console.log(idx);
        idx--;
        if(idx < 0 ){
            idx = len - 1;
        }
    } 
    list.style.marginLeft = -100 * idx + '%';    
}));    

temp.addEventListener('mouseover', function(){
    stopSlide();
})
temp.addEventListener('mouseout', function(){
    goSlide();
})

function move(){
    if(idx >= len) return;
        idx++;
        list.style.marginLeft = -100 * idx + '%';
    if(idx === len - 1)
        idx = 0;
        list.style.marginLeft = -100 * idx + '%';
        // console.log(idx);
}

const goSlide = function(){
    go = setInterval(function(){
        requestAnimationFrame(move);
    }, 2500);
}

const stopSlide = function(){
    clearInterval(go);
}
goSlide();
