// const ul = document.querySelector('ul');
// console.log(ul.parentElement)


// console.log(ul.nextElementSibling)

// console.log(ul.previousElementSibling)

// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)
// console.log(ul.children)
// console.log(ul.childNodes)


// To get ul from services id

// const service = document.querySelector('#services');
// ul = service.parentElement.parentElement;

// OR ___________

// ul = service.closest('ul')
// console.log(ul)

// To get btn1 from services id
// const service = document.querySelector('#services');
// btn1 = service.parentElement.parentElement.nextElementSibling.firstElementChild;
// console.log(btn1)


const container = document.querySelector('.container');
const content = document.createElement('div');
container.appendChild(content);
content.classList.add('content');

const h1 = document.createElement('h1');
content.appendChild(h1);
h1.textContent = 'Hello';

const div = document.createElement('div');
content.appendChild(div);
div.textContent = 'Hello world';
div.setAttribute('id','hello');

console.log(content)


