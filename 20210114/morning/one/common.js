let act = document.querySelector('.action');

function actionToggle(){
    act.classList.toggle('active');
}

act.addEventListener('click', function(){
    actionToggle();
})