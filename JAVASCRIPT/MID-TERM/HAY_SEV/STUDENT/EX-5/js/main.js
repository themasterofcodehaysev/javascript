
// Remove row functions from the table
const removeRow = (event) => {
   // TODO: Remove row with confirmation message when click on remove button

   let isConfrim = confirm('Do you want to delete?');
   let tableRow = event.target.closest('tr');
   if (isConfrim) {
       tableRow.remove();
   };

}

// View user information in list 
let viewUser = (event) => {
    // TODO: View user information in list by click on view button
    for (const show of btnViews) {
        console.log(event.target());
    }
}

// Main
const leftBox = document.querySelector('.left-box');
const btnViews = document.querySelectorAll('.view');
const btnRemoves = document.querySelectorAll('.remove');

// TODO: Add Event listeners to remove button
for (const button of btnRemoves) {
    button.addEventListener('click', removeRow)
};

// TODO: Add event listeners to view button
btnViews.addEventListener('click',viewUser);