function startDate() {
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
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let date = today.getDate();
  let monthIndex = today.getMonth();
  let year = today.getFullYear();
  if (hour > 12) {
    hour = hour - 12;
  }
  hourElement.textContent = hour;
  minElement.textContent = min;
  secElement.textContent = sec;

  dateElement.textContent = date + " " + months[monthIndex] + " " + year;
}

const hourElement = document.querySelector("#hour");
const minElement = document.querySelector("#minute");
const secElement = document.querySelector("#second");
const dateElement = document.querySelector("#date");

setInterval(startDate, 1000);
