
const addBtn = document.querySelector('.add');
const container = document.querySelector('.container');
let input = document.querySelector('.input');

class item{
    constructor(itemName){
        // Create the item div
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('input-item');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editBtn = document.createElement('button');
        editBtn.innerHTML = "EDIT";
        editBtn.classList.add('edit');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('remove');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editBtn);
        itemBox.appendChild(removeBtn);

        editBtn.addEventListener('click', () => this.edit(input));
        removeBtn.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}
// class

function check(){
    if(input.value != "") {
        new item(input.value);
        input.value = "";
    }
}
addBtn.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
});

