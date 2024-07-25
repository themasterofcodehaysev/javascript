function showDate() {
  let today = new Date();
  // create 6 variables to store Hours, Minutes, Seconds, Date, Months and Year.
  
  // check this website : https://www.w3schools.com/js/js_date_methods.asp
  // note:
  // the value of month is return us as number of index for each month so you can use it with array months to get value
  // the hours is return us as 0 - 23 (make sure it show us in 12-hour format)

  // add text content to hourElement, minElement, secElement 
 
  let hour = today.getHours();
  hourElement.textContent = hour;

  let minutes = today.getMinutes();
  minElement.textContent = minutes;

  let sec = today.getSeconds();
  secElement.textContent = sec ;

  // add text content to dateElement as format(date month year)
  // ex: 01 January 2024 
  
  let dates = today.getDate();
  let months = today.getMonth();
  let years = today.getFullYear();
  dateElement.textContent = dates ;
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const hourElement = document.querySelector("#hour");
const minElement = document.querySelector("#minute");
const secElement = document.querySelector("#second");
const dateElement = document.querySelector("#date");

setInterval(showDate, 1000);
