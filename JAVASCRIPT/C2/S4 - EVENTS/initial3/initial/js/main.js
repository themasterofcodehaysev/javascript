
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('button');
const color = "#"


// return the color string code like example: #f00233
function colorCode() {
   return color + getRandomColor();
}

// return the number by random number between 0 and 16 (length of hex)
function getRandomColor() {
   let code = "";
   for (let i = 0; i < 6; i++) {
      let index = [Math.floor(Math.random() * 16)];
   }
   code + hex[index]
   return code;
}

let randomColor = getRandomColor();
btn.addEventListener('click', function() {
document.body.style.background = randomColor;
});

