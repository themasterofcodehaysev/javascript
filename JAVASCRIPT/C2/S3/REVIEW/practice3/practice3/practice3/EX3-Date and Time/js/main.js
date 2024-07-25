function showDate() {
  let today = new Date();
  // create 6 variables to store Hours, Minutes, Seconds, Date, Months and Year.
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let date = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  // check this website : https://www.w3schools.com/js/js_date_methods.asp
  // note:
  // the value of month is return us as number of index for each month so you can use it with array months to get value
  // the hours is return us as 0 - 23 (make sure it show us in 12-hour format)
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  // add text content to hourElement, minElement, secElement 
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  date = date < 10 ? "0" + date : date;
  // add text content to dateElement as format(date month year)
  hourElement.textContent = hours;
  minElement.textContent = minutes;
  secElement.textContent = seconds;
  dateElement.textContent = date + " " + months[month] + " " + year + " " + ampm;
  // ex: 01 January 2024 
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



