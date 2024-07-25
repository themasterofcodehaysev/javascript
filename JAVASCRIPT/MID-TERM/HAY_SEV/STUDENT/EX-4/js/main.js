const randomAuthor = () => {
   // TODO: random author name
   let authorRandom = Math.floor(Math.random()* names.length)
   showTitle.textContent = names[authorRandom];
}

// search movie title
const searchMovieTitle = () => {
    // TODO: search movie by title
    for (const searchs of tr) {
        if (searchs.textContent.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())) {
            searchs.style.display = 'block';
        } else {
            searchs.style.display = 'none';
        }
    }
}


// Main
const tr = document.querySelectorAll('tbody tr');
const searchText = document.querySelector('#search');
const showTitle = document.querySelector('h1');

// TODO: Add event listeners on input search
searchText.addEventListener('keyup', searchMovieTitle)


// TODO: call randomAuthor function every 1000 milliseconds
setInterval(randomAuthor, 1000);
let names = text.split(' ');