
let deleteList = document.getElementsByClassName('delete');

for (let btn of deleteList){
    btn.addEventListener('click', (event) =>{
        event.target.closest('li').remove()
    });
}