
let body = document.querySelector('body');

let table = document.createElement('table');
table.classList.add('table-container');

// Create Thead

let rowTh = document.createElement('tr');
rowTh.style.backgroundColor = "blue";
let thFistName = document.createElement('th');
thFistName.textContent = "First Name"
let thLastName = document.createElement('th');
thLastName.textContent = "Last Name";
let thSex = document.createElement('th');
thSex.textContent = "Male";
let thYear = document.createElement('th');
thYear.textContent = "Year";
let thClass = document.createElement('th');
thClass.textContent = "Class";
let thMajor = document.createElement('th');
thMajor.textContent = "Major";


function createTable(obj){

    // Create Tbody

    let rowTd = document.createElement('tr');
    rowTd.style.backgroundColor = "skyblue";

    let tdFistName = document.createElement('th');
    tdFistName.textContent = obj.FirstName;
    let tdLastName = document.createElement('th');
    tdLastName.textContent = obj.LastName;
    let tdSex = document.createElement('th');
    tdSex.textContent = obj.Sex;
    let tdYear = document.createElement('th');
    tdYear.textContent = obj.Year;
    let tdClass = document.createElement('th');
    tdClass.textContent = obj.Class;
    let tdMajor = document.createElement('th');
    tdMajor.textContent = obj.Major;

    // Append child

    body.appendChild(table);
    table.appendChild(rowTd);
    table.appendChild(rowTh);
    rowTd.appendChild(tdMajor);
    rowTd.appendChild(tdClass);
    rowTd.appendChild(tdYear);
    rowTd.appendChild(tdSex);
    rowTd.appendChild(tdLastName);
    rowTd.appendChild(tdFistName);
    rowTh.appendChild(thMajor);
    rowTh.appendChild(thClass);
    rowTh.appendChild(thYear);
    rowTh.appendChild(thSex);
    rowTh.appendChild(thLastName);
    rowTh.appendChild(thFistName);

}
function display(obj){
    for(let obj of object){
        createTable(obj)
    }
}


let object = [
//     {FirstName: "HAY", LastName:"Sev", Sex:"Male", Year: "2024", Class:"WepA", Major:"Wep Developer"},
//     {FirstName: "VANNY", LastName:"CHAN", Sex:"Female", Year: "2024", Class:"WepA", Major:"Wep Developer"},
    {FirstName: "MAKA", LastName:"Try", Sex:"Male", Year: "2024", Class:"WepA", Major:"Wep Developer"},
    {FirstName: "MAKARA", LastName:"Try", Sex:"Male", Year: "2024", Class:"WepA", Major:"Wep Developer"},
    {FirstName: "MAKARA", LastName:"Try", Sex:"Male", Year: "2024", Class:"WepA", Major:"Wep Developer"},
]

display()