const nav = document.querySelector('.nav');
const togBtn = document.querySelectorAll('button');
console.log(togBtn);

function menuToggle() {
    nav.classList.toggle('show');
}

togBtn.forEach(function(event){
    event.addEventListener('click', function(btn){
        menuToggle();
    })
})

// togBtn.addEventListener('click', function(){
//     menuToggle();
// })