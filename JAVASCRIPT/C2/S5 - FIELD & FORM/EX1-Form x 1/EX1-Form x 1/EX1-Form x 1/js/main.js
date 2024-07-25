
function AddPerson() {
    // to check gender 
    let sex = gender.checked ? gender.value : 'Female';

    // create table row name tableRow 
    let tr = document.createElement('tr');
    // create table data name tdFirstName 
    // add value of firstName as textContent 
    let thfirst = document.createElement('th');
    thfirst.textContent = firstName.value;

    // create table data name tdLastName
    // add value of lastName as textContent 
    let thlast = document.createElement('th');
    thlast.textContent = lastName.value;
    // create table data name tdEmail
    // add value of email as textContent 
    let themail = document.createElement('th');
    themail.textContent = email.value;
    // create table name tdProvince
    // add value of province as textContent
    let thprovince = document.createElement('th');
    thprovince.textContent = province.value;
    // create table data name tdFavourite 
    // add value of favourite as textContent
    let thfavorite = document.createElement('th');
    thfavorite.textContent = favourite.value;
    // create table data name tdGender 
    // add value of sex as textContent
    let thgender = document.createElement('th');

    let radioName = document.getElementsByName('gender');
    for (let i =  0; i < radioName.length; i++){
        if (radioName[i].checked){
            thgender.textContent = radioName[i].value;
        }
    }

    // append tdFirstName, tdLastName, tdEmail, tdProvince, tdGender, tdFavourite to tableRow
    tr.appendChild(thfirst);
    tr.appendChild(thlast);
    tr.appendChild(thgender)
    tr.appendChild(themail);
    tr.appendChild(thprovince);
    tr.appendChild(thfavorite);
    // append tableRow to tbody 
    tbody.appendChild(tr);
}



// Main
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const province = document.querySelector('#province');
const favourite = document.querySelector('#favorite');
let gender = document.querySelector('input[name="gender"]');
const submitButton = document.querySelector('#submit');
const tbody = document.querySelector('tbody');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    AddPerson();
});