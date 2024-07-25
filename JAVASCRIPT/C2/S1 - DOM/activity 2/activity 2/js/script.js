console.log(document.getElementById("book-list"));
console.log(document.getElementById("add-book"));
console.log(document.getElementsByClassName("delete"));
console.log(document.querySelector("#book-list"));
console.log(document.querySelector("#book-list ul"));
console.log(document.querySelector("#book-list ul li"));

let book_container = document.querySelector("#book-list ul")
let inputBookName = document.querySelector('#add-book input');
let addbtn = document.querySelector('#add-book button')
let btndelete = document.getElementsByClassName('delete');

for (let btn of btndelete){
    btn.addEventListener(('click'),(event) =>{
        event.target.closest('li').remove()
    })
}

function createBook(e){
    e.preventDefault();
    let li = document.createElement('li');
    book_container.appendChild(li);
    let bookName = document.createElement('span');
    bookName.classList.add('name');
    bookName.textContent = inputBookName.value;
    li.appendChild(bookName);
    let deletebtn = document.createElement('span');
    deletebtn.classList.add('delete');
    deletebtn.textContent = 'delete';
    li.appendChild(deletebtn);


    for (let btn of btndelete){
        btn.addEventListener(('click'),(event) =>{
            event.target.closest('li').remove()
        })
    }
}





addbtn.addEventListener('click',createBook);