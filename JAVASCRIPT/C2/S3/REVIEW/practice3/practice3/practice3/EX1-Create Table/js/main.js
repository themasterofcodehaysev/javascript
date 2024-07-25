function createRow(data) {
    // TODO:

    // create tr element 
    let tr = document.createElement('tr');
    // create tdId, tdName, tdEmail, tdPhone, tdAction and btn element following the format in html file
    let tdId = document.createElement('td');
    let tdname = document.createElement('td');
    let tdemail = document.createElement('td');
    let tdphone = document.createElement('td');
    let tdAction = document.createElement('td');
    let btn = document.createElement("button");
    btn.classList.add('btn');
    btn.classList.add('btn-danger');
    // add text content to tdId, tdEmail, tdPhone, tdName, and add btn to tdAction
    tdId.textContent=data.id;
    tdname.textContent=data.name;
    tdemail.textContent=data.email;
    tdphone.textContent=data.phone;
    btn.textContent = "Delete";
    
    // append tdId, tdName, tdEmail, tdPhone, tdAction to tr
    tr.appendChild(tdId);
    tr.appendChild(tdname);
    tr.appendChild(tdemail);
    tr.appendChild(tdphone);
    tr.appendChild(tdAction);
    tdAction.appendChild(btn);

    // append tr to tbody 
    tbody.appendChild(tr);

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
// let btnRemove = document.querySelectorAll('.btn');


// btnRemove.forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     let row = btn.closest('tr');
//     let confirmed = window.confirm("Are you sure you want to remove this item?");
    
//     if (confirmed) {
//       row.remove();
//     }
//   });
// });


