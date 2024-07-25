let fruits = document.querySelectorAll('li');
let search = document.getElementById('search');

function searching(){
    for (let fruit of fruits){
        if (fruit.textContent.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())){
            fruit.style.display = 'block'
        }
        else{
            fruit.style.display = 'none'
        };
    }
}


search.addEventListener('keyup', searching);
