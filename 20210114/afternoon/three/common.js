
let pos = document.documentElement;
console.log(pos);

pos.addEventListener('mousemove', function(e){
    pos.style.setProperty('--x', e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY + 'px');
})