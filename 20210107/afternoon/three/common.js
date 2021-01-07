const blurElem = document.querySelector('.imgBlur');

// function addBlurEffect(){
//     blurElem.style.filter = "blur(5px)";     
// };

window.addEventListener('scroll', function(){
    var scrollPos = document.scrollingElement.scrollTop;
    console.log(scrollPos);
    if(scrollPos >= 200){
        blurElem.classList.add('effect');
    } else if(scrollPos <= 200) {
        blurElem.classList.remove('effect');

    }
});
