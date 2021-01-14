
let imgBox = document.querySelectorAll('.imgBox');

imgBox.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('act');
}))

// imgBox.forEach(function(popup){
//     popup.addEventListener('click', function(event){
//         event.classList.toggle('act');
//     });
// })