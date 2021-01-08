const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const playBtn = document.querySelector('.play');
const closeBtn = document.querySelector('.closeBtn');
const trailer = document.querySelector('.trailer');

function toggleMenu(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

menuToggle.addEventListener('click', function(){
    toggleMenu();
});

function videoToggle(){
    const video = document.querySelector('video');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}

// video
playBtn.addEventListener('click', function(){
    videoToggle();
});
closeBtn.addEventListener('click', function(){
    videoToggle();
});