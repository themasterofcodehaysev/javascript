let ul = document.querySelector('ul');
let input = document.getElementById('fruit');
let btn = document.getElementById('create');

function createList (){

    let li = document.createElement('li');
    li.textContent = input.value;

    ul.appendChild(li)
}

btn.addEventListener('click', createList)
