const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});

function toggleMenu(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

menuToggle.addEventListener('click', function(){
    toggleMenu();
});

