const sec = document.querySelector('section');
const container = document.querySelector('.container');
const anc = document.querySelectorAll('a');

function toggleForm() {
    sec.classList.toggle('act');
    container.classList.toggle('act');

}

anc.forEach(function(e) {
    e.addEventListener('click', () => {
        toggleForm();
    })
})