let box = document.querySelector('.box');
let shadow = '';
for(var i = 0; i < 500; i++) {
    shadow += (shadow? ',' : '') + i*1  + 'px ' + i*1 + 'px 0 #e8305b'; 
}
box.style.boxShadow = shadow;