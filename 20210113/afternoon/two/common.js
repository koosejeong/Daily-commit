
let color = [
    "#222f3e",
    "#f368e0",
    "#ee5253",
    "#0abde3",
    "#10ac84",
    "#5f27cd",
    "#222f3e"
];
let i = 0;

document.querySelector('button').addEventListener('click', function(){
    i = i < color.length ? ++i : 0;
    document.querySelector('.inner').style.backgroundColor = color[i];
})