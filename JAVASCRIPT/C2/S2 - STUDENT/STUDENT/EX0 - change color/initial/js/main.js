// TODO 
// let btn = document.getElementsByClassName("btn");
// let paragraph = document.getElementsByClassName("paragraph");
// let element = document.getElementsByClassName("element");
// btn.addEventListener('click', () => {
//     document.body.style.background= "red";
// })


const btn = document.querySelector("button");
const p = document.querySelector("p");
const div = document.querySelector("div");

btn.addEventListener('click', () => {
    document.body.style.background = "red";
})
p.addEventListener('click', () => {
    document.body.style.background = "orage";
})
div.addEventListener('click', () => {
    document.body.style.background = "teal";
})

