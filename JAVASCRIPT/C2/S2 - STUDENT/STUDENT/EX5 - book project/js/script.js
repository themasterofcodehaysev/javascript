// TODO 
let bookList = document.querySelectorAll('li .book-name');
let bookName = document.getElementsByClassName('book-name');
for (let text of bookList){
    console.log(text.textContent)
};

let number = document.getElementById('books-number').textContent = bookList.length;
let bookTitle = document.getElementById('books-titles') .textContent = bookName;
console.log(bookTitle);





let deleteList = document.querySelectorAll('.delete');
for (let btn of deleteList){
    btn.addEventListener('click', (event) => {
        event.target.closest('li').remove()
    });
}