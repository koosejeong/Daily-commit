let blur = document.querySelector('.blur');
let pop = document.querySelector('.popup');
let anc = document.querySelectorAll('a')

function toggle(){
    blur.classList.toggle('active');
    pop.classList.toggle('active');
}
function popToggle(){
    pop.classList.toggle('active');
    blur.classList.remove('active');
}

anc.forEach(btn => {
    btn.addEventListener('click', function(){
        if(this.classList.contains('openBtn')){
            toggle();
        } else {
            popToggle();
        }
    })

});