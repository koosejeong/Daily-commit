

function clock(){
    let hours = document.querySelector('.hour');
    let minut = document.querySelector('.minu');
    let secod = document.querySelector('.seco');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hours.innerHTML = h;
    minut.innerHTML = m;
    secod.innerHTML = s;

}

var interval = setInterval(clock, 1000);