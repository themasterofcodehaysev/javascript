let button = document.querySelectorAll('.btn');

for (let btn of button){
    btn.addEventListener(('click'), (e) => {
        let isconfirm = confirm(" do you want to delete it?")
        let deleteRow = e.target.closest('tr');
        if (isconfirm){
            deleteRow.remove();
        }
        
    });
}




















 

