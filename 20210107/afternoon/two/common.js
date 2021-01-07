document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball(){
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        var x = (eye.getBoundingClientRect().left) + (eye.clientWidth /2);
        var y = (eye.getBoundingClientRect().top) + (eye.clientHeight /2);
        var radian = Math.atan2(event.pageX - x, event.pageY - y);
        var rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+ rot + "deg)";

        console.log(x, y);
    });
};