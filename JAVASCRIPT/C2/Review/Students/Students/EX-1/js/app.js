let post = {
    id: 1,
    title: "Natural in the world",
    image: "https://www.pure-leisure.co.uk/wp-content/uploads/2019/03/3-Reasons-Why-Conservation-Is-So-Important.jpg",
    description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
    date: "14 / April / 2021",
    author: "Rady Cody"
};
//1. create div with class name "container" and append it to "body"
let body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add("container");
body.appendChild(container);

//2. create div with class name "card" and append it to "container" div
let card = document.createElement('div');
card.classList.add("card");
container.appendChild(card);

//3. create div with class name "card-img" and append it to "card" div
let cardImage = document.createElement('div');
cardImage.classList.add("card-img");
card.appendChild(cardImage);

//4. create img tags with class name "img", use "src" attribute to display image and append it to "card-img" div
// example: sample.src = post.image;
let img = document.createElement('img');
img.src = post.image;
cardImage.appendChild(img);

//5. create div with class name "card-body" and append it to "card" div
let cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.appendChild(cardBody);

//6. create h2 tags with class name "card-title", textContent = post.title and append it to "card-body" div
let h2 = document.createElement('h2');
h2.classList.add('card-title');
h2.textContent = post.title;
cardBody.appendChild(h2);
//7. create p tags with class name "description",
// textContent = post.description
let p = document.createElement('p');
p.classList.add('description');
p.textContent = post.description;

// and then apppend it to "card-body" div
cardBody.appendChild(p);
//8. create div with class name "card-footer" and append it to "card" div
let cardFooter = document.createElement('div');
cardFooter.classList.add('card-footer');
card.appendChild(cardFooter);
//9. create span tags with id name "date", textContent = post.date and append it to "card-footer" div 
let date = document.createElement('span');
date.setAttribute('id',"date");
date.textContent = post.date;
cardFooter.appendChild(date);
console.log(date)
//10. create span tags with id name "author", textContent = post.author  and append it to "card-footer" 
let author = document.createElement('span');
author.setAttribute('id','author');
author.textContent = post.author;
cardFooter.appendChild(author);