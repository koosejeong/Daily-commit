const form = document.getElementById('form');
const email = document.getElementById('email').value;
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

console.log(form);
console.log(email);
console.log(pattern);

function validate() {

  if(email.match(pattern)) {
    form.classList.add('valid')
    form.classList.remove('invalid')
  } else {
    form.classList.add('invalid')
    form.classList.remove('valid')
  }
  // if(email == "") {
  //   form.classList.remove('valid')
  //   form.classList.remove('invalid')
  // }
};

form.addEventListener('keyup', function(){
  validate();
});

console.log(validate);
