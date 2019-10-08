let input = document.getElementById("text1");
let add = document.getElementById("add1");
let completed = document.getElementById("completed");
let todo = document.getElementById("todo");

let first =[];

add.addEventListener('click', function() {
    var value = input.value;
    if(value) {
        additem(value);
    }
})

function additem(value) {
    additemToDOM(value);
    input.value ="";
    first.push(value);
}

function additemToDOM(text) {
    let list = (completed) ? todo : completed;
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    let item =document.createElement('LI');
    item.innerHTML = text;
    let complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = add;

    item.appendChild(buttons);
    list.insertBefore(item ,list.childNodes[0]);
}