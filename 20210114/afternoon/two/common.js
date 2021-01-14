
let range = document.querySelector('.rangeValue');
let rangeBar = document.getElementById('rangeBar');

console.log(range);
console.log(rangeBar);

function rangeSlide(value) {
    range.innerHTML = value;
    // console.log(value);

}

rangeBar.addEventListener('change', function(){
    rangeSlide(this.value);
});

rangeBar.addEventListener('mousemove', function(){
    rangeSlide(this.value);
});