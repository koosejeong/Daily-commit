
const toggle = document.querySelector('.toggle');
const pw = document.getElementById('pw');

function showHide(){

    if(pw.type === 'password') {
        pw.setAttribute('type', 'text');
        toggle.classList.add('hide');
    } else {
        pw.setAttribute('type', 'password');
        toggle.classList.remove('hide');     
    }
}


pw.addEventListener('keyup', function(){
    showHide();
});