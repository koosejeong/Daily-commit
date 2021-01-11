let header = document.querySelector('.header');
let moBtn = document.querySelector('.toggle');
let listEvent = document.querySelectorAll('li');


function toggle() {
    header.classList.toggle('active');
}

moBtn.addEventListener('click', function(){
    toggle();
});
  
listEvent.forEach(function(event){
    event.addEventListener('click', function(){
        toggle();
    });
})