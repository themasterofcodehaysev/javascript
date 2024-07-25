let fruits = document.querySelectorAll('li');
let input = document.querySelector('input');

function search() {

    for (const fruit of fruits) {
        if (fruit.textContent.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())) {
            fruit.style.display = 'block';
        } else {
            fruit.style.display = 'none';
        }
    }
}

input.addEventListener('keyup', search)
