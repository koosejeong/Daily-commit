let video = document.querySelector('video');

window.addEventListener('scroll', () => {
    let value = 1 + window.scrollY / -600;
    // console.log(value);
    video.style.opacity = value;
})