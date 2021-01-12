let container = document.querySelector('.container');
let anc = document.querySelectorAll('p a');

function toggleForm() {
    container.classList.toggle('active');
}

anc.forEach(clkEve => {
    clkEve.addEventListener('click', function(){
        toggleForm();
    });
});