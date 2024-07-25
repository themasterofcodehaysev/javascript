//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {

  // 1- Check the event if raised on the button delete 
  let parent = event.target.closest('li')
  
 //  2  if yes, get the parent and remove it from the  bookList
  parent.remove()
}

function addBook(event) {
  event.preventDefault();
  // 1- Get the book name from the input field

  let bookName = document.getElementById('add-book-textfield').value;
  
 
  // 2- Create a new spam bookName for the book name, class name = name
  let spanOne = document.createElement('span')
  spanOne.setAttribute('class','name')
  spanOne.textContent = bookName;

  // 3- Create a new spam deleteBtn for the button delete, class name = delete
  let spanTwo = document.createElement('span')
  spanTwo.setAttribute('class','delete')
  spanTwo.textContent = "delete"

  // 4- Create a new li
  let li = document.createElement('li')

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  li.appendChild(spanOne)
  li.appendChild(spanTwo)
  document.querySelector('ul').appendChild(li)

}

function searchBook(event) {
  // 1- Get the search text
  let searchText = event.target.value;

  // 2- Loop on all LI
  let listLi = document.querySelectorAll('li');
  if (searchText === ""){
    for(let li of listLi) {
        li.style.display = 'block';
    }
  }
  else{
    for(let li of listLi) {
      let spanContent = li.firstElementChild.textContent.toUpperCase()
      if(spanContent.includes(searchText.toUpperCase()) === false) {
      // Update the style of the LI (visible or hidden)
        li.style.display = 'none';
        }
    }
  }
  }




//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("click", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);
