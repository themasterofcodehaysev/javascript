
const  clearInput = () => {
   //TODO: Clear data from input field

   firstName.value = "";
   lastName.value = "";
   comment.value = "";

}


const createRow = (event) => {
   // TODO: Create new row with data from input field
   event.preventDefault();
   
   let td_firstName = document.createElement('td');
   td_firstName.textContent= firstName.value;
  
   let td_lastName = document.createElement('td');
   td_lastName.textContent = lastName.value;
   let td_provine = document.createElement('td');
   td_provine.textContent = province.value;

   let td_gender = document.createElement('td');
   for (let i = 0 ; i < genders.length; i++){
      if (genders[i].checked){
         td_gender.textContent = genders[i].value;
      }
   }

   let td_skill = document.createElement('td');
   for (let check of skills){
      if (check.checked){
         td_skill.textContent = check.value + ',';
      }
   }
   let td_comment= document.createElement('td');
   td_comment.textContent = comment.value;

   let tr = document.createElement('tr');
   tr.appendChild(td_firstName);
   tr.appendChild(td_lastName);
   tr.appendChild(td_provine);
   tr.appendChild(td_gender);
   tr.appendChild(td_skill);
   tr.appendChild(td_comment);
   tbody.appendChild(tr);

   clearInput()
   
   
}


// Main
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const province = document.querySelector('#province');
const genders = document.querySelectorAll('input[type="radio"]');
const skills = document.querySelectorAll('.skill');
const comment = document.querySelector('#comment');
const tbody = document.querySelector('tbody');
const btnSubmit = document.querySelector('button');

// TODO: add event listeners to submit button
btnSubmit.addEventListener('click', createRow)
