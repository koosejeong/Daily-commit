console.log('index.js')


const donut = document.querySelector('.charge_circle');

const degree = 3.6 * (100 - parseInt(donut.getAttribute('data-per')));
const r = parseInt(donut.getAttribute('r'));

// document.documentElement.style.setProperty('--l', r * 3.141592 * 2);
// document.documentElement.style.setProperty('--deg', degree.toString() + "deg");
// document.documentElement.style.setProperty('--result', 2 * 3.141592 * r * (degree / 360));

console.log( r * 3.141592 * 2); //157.0796
const data = r * 3.141592 * 2;
donut.style.strokeDasharray = data;
donut.style.strokeDashoffset = data;
// donut.style.strokeDashoffset = -140;

let i = 0;
const loading = setInterval(() => {

    if (i <= -data) {
        i = -data;
    } else { i--; }

    donut.style.strokeDashoffset = (r * 3.141592 * 2) + i; //- 1일 시 반시계방향
    
}, .3);