const keyboardEvent = (event) => {
    // TODO 
    let key = event.key;
    document.querySelector('h1').textContent = key;
    // https://www.w3schools.com/jsref/event_key_key.asp

}

document.addEventListener('keydown', keyboardEvent)