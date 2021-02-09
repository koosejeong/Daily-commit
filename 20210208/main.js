const bgImg = document.querySelector('img');
const list = document.querySelectorAll('li');
const toggleIco = document.querySelector('.munuToggle');
const navScreen = document.querySelector('.navigation');

function changeImg(any) {
    bgImg.src = any;
}

list.forEach(ls => {
    let url = `./images/`;
    ls.addEventListener('mouseenter', () => {
        // console.log(bgImg.src);
        let ul = document.getElementById('unorder'),
            li = ul.getElementsByTagName('li');
        for (let i = 0; i < li.length; i++) {
            (function(idx) {
                li[idx].onmouseenter = function() {
                    let imgSrc = url+`img${idx+1}.jpg`;   
                    changeImg(imgSrc);
                }
            })(i);
        }       
    });
});


toggleIco.addEventListener('click', () => {
    toggleIco.classList.toggle('on');
    navScreen.classList.toggle('on');
});