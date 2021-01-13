
function createBubble(){
    const sec = document.querySelector('section');
    const creElm = document.createElement('span');
    let size = Math.random() * 60;

    creElm.style.width = 20 + size + 'px';
    creElm.style.height = 20 + size + 'px';
    creElm.style.left = Math.random() * innerWidth + 'px';
    sec.appendChild(creElm);

    setTimeout(() => {
        creElm.remove();
    }, 4000)
}

setInterval(createBubble, 50);