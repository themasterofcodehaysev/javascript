function createRow(data) {
    // TODO:
    // create tr element 
    // create tdId, tdName, tdEmail, tdPhone, tdAction and btn element following the format in html file
    let body = document.querySelector('tbody');
    let tr = document.createElement('tr');
    let number = document.createElement('tr');
    let name = document.createElement('td');
    let email = document.createElement('td');
    let phone = document.createElement('td');
    // add text content to tdId, tdEmail, tdPhone, tdName, and add btn to tdAction
    number.textContent = '0';
    name.textContent = 'yon';
    email.textContent = 'yen@email.com';
    phone.textContent = '012-345-678';
    // append tdId, tdName, tdEmail, tdPhone, tdAction to tr
    tr.appendChild(number);
    tr.appendChild(name);
    tr.appendChild(email);
    tr.appendChild(phone);
    // append tr to tbody 
    body.appendChild(tr);


}


// main
let students = [
    {
        id: 1,
        name: "John",
        email: "john@example.com",
        phone: "123-456-3303"
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@example.com",
        phone: "123-456-3304"
    },
    {
        id: 3,
        name: "Mary",
        email: "mary@example.com",
        phone: "123-456-3305"
    },
    {
        id: 4,
        name: "Peter",
        email: "peter@example.com",
        phone: "123-456-3306"
    },
    {
        id: 5,
        name: "Lisa",
        email: "lisa@example.com",
        phone: "123-456-3307"
    }
];

const tbody = document.querySelector('tbody');
for (let student of students) {
    createRow(student)
}