const users = [
    {first_name:'Yon',last_name:'Yen',gmail:'yon@gmail.com',phone:'1234567'},
    {first_name:'Rady',last_name:'Y',gmail:'rady@gmail.com',phone:'12345627'},
    {first_name:'Him',last_name:'Hey',gmail:'him@gmail.com',phone:'12345627'},
]



function createTable(user){

    let tr = document.createElement('tr');

    let td_first = document.createElement('td');
    td_first.textContent = user.first_name;

    let td_last = document.createElement('td');
    td_last.textContent = user.last_name;

    let td_email = document.createElement('td');
    td_email.textContent = user.gmail;

    let td_number = document.createElement('td');
    td_number.textContent = user.phone;

    let td_btn = document.createElement('td');
    let btn = document.createElement('button');
    btn.classList.add("btn", "btn-danger");
    btn.textContent = "delete";
// appendchild
    td_btn.appendChild(btn);
    tr.appendChild(td_first);
    tr.appendChild(td_last);
    tr.appendChild(td_email);
    tr.appendChild(td_number);
    tr.appendChild(td_btn);
    tbody.appendChild(tr);
}

let tbody = document.querySelector('tbody');
for (let user of users){
    createTable(user);
}

