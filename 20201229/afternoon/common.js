let box = document.querySelectorAll('.box');
box.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');
}));