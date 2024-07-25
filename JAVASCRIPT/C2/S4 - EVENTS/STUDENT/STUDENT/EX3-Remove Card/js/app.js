// create a new card

function createCard(id) {
  const card = document.createElement('div');
  card.classList.add('card');

  // card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);
  
  // card image in card body
  const cardImage = document.createElement('img');
  cardImage.src = "images/sample.png";
  cardBody.appendChild(cardImage);

  // card text in card body
  const cardText = document.createElement('p');
  cardText.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque.';
  cardBody.appendChild(cardText);
  
  // card footer
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer');
  card.appendChild(cardFooter);

  // button in card footer
  const cardButton = document.createElement('button');
  cardButton.textContent = 'Close Card (' + id + ')';
  cardButton.classList.add('cardBtn')
  cardButton.addEventListener('click', clear)
  cardFooter.appendChild(cardButton);
  

  // add card to containers
  container.appendChild(card)

}

// display card
function displayCard(n) {
  for (let i = 0; i < n; i++) {
    createCard(i + 1);
  }
}

// Main
const container = document.querySelector('.container');
// call displayCard x 10
displayCard(10);



function clear(e){
  let btnParent = e.target.parentElement;
  let card = btnParent.parentElement;
  card.remove()
}

// create function delete card 


// function deleteCard(event) {
//   // Get the parent card of the button using the closest() function.
//   let btnParent = event.target.parentElement;
//   let card = btnParent.parentElement;
//   card.remove();


//   // Remove the parent card.
 


// }


// // get all cards
// let btn = document.getElementsByClassName('cardBtn');

// // add event listener for all card's buttons then call funtion deleteCard
// cardButton.eventlistener('click', deleteCard);