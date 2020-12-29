const textarea = document.querySelector('textarea');
const count = document.querySelector('.count');

console.log(textarea);
console.log(count);

function countLetters() {
    var txt = textarea.value;
    var txtLength = txt.length;
    count.innterHTML = `${txtLength}`;
}


textarea.addEventListener('keypress', () => {
    countLetters();
})