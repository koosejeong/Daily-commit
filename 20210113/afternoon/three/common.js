let scrollT = document.querySelector('.scroppTop');

window.addEventListener('scroll', function(){
    scrollT.classList.toggle('active', window.scrollY > 500);
});

function scrollMove(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}

scrollT.addEventListener('click', function(){
    scrollMove();
});