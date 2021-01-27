
const listTemp = document.querySelectorAll('li');


function imgSlider(any){
    document.querySelector('.slider').src = any;
}

listTemp.forEach(function (list){
    list.addEventListener('click', (any) => {
        imgSlider(any.target.src);
    });
})