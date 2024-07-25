

// Loop 6 times to get the color code by random from items in array
// https://www.w3schools.com/js/js_random.asp


function getRandomColor() {

    const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = "#";

    for (let i = 0; i < 8; i++) {
      color += colorCode[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  
  // Change background color when the page is clicked
  // set background color to body =  color code
  
  document.addEventListener("click", function() {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });

// add text content to h1 = color code



