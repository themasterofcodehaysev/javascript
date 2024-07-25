


// // add event listener to all btn

// // create function to remove card 

// // create one variable to store the row 
// // use build in function closet on button with tag parent name to get the parent row 
// // ex :
// // btn.closet("tr")

// // use window.confirm with value("Are you sure you want to remove this item?")

// // if confirm remove the row 


let btnRemove = document.querySelectorAll('.btn');

btnRemove.forEach(function (btn) {
  btn.addEventListener('click', function () {
    let row = btn.closest('tr');
    let confirmed = window.confirm("Are you sure you want to remove this item?");
    
    if (confirmed) {
      row.remove();
    }
  });
});


// for (let btn of btnRemove){
//   btn.addEventListener('click', function(e){
//     let isRemove = window.confirm('Are you sure you want to remove');
//     if (isRemove){
//       e.target.closest('tr').remove();
//     }
//   });
// }

