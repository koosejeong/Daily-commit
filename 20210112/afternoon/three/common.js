let form = document.getElementById('form');
let email = document.getElementById('email').value;
let emailForm = document.querySelector('input');
let txt = document.getElementById('txt');



function validation(val){

    let pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if(pattern.test(val)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        txt.innerHTML = "You Email Address in Valid.";
        txt.style.color = "#00ff00";
    } else { 
        form.classList.remove('valid');
        form.classList.add('invalid');
        txt.innerHTML = "Please Enter Valid Email Address";
        txt.style.color = "#ff0000";       
    }

    if(email == null){
        form.classList.remove('valid');
        form.classList.remove('invalid');
    }

}

emailForm.addEventListener('keyup', function(e){
    validation(e.target);
})